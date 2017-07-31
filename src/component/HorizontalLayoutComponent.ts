import { Composite } from "./Composite";
import { ILogger } from "../util/Logger";
import { IAnimator } from "../animator/Animators";
import { IComponent, Component } from "./Component";
import { ComponentFactory } from "./ComponentFactory";
import ElementHelper from "../util/ElementHelper";
import { State } from "../state/State";

export class HorizontalLayoutComponent extends Composite {

    private fixedChildren: Array<IComponent>;
    private perctChildren: Array<IComponent>;
    private fluidChildren: Array<IComponent>;

    constructor(logger: ILogger, animator?: IAnimator) {
        super(logger, animator);

        this.fixedChildren = new Array<IComponent>();
        this.perctChildren = new Array<IComponent>();
        this.fluidChildren = new Array<IComponent>();

        this.registerEvent('init', () => { return this.init() });
    }

    init() {
        // For each child element in elements, set up a new Component figure 
        // out if it has a width set as a pixel value (fixed child), a 100%
        // value (fluid child), or a value set to a specific percentage 
        // (percentage child)
        let el = this.getElement();
        let factory = new ComponentFactory();
        for (let i = 0; i < el.children.length; i++) {
            let child = el.children[i] as HTMLElement;
            if (!child.id)
                ElementHelper.setGuidId(child);
            let childComponent = factory.component(`#${child.id}`);
            let size = child.getAttribute('data-size') || '100%';
            if (size === '100%') {
                this.fluidChildren.push(childComponent);
            }
            else if (size.match(/^[\d]+%$/)) {
                this.perctChildren.push(childComponent);
            }
            else {
                this.fixedChildren.push(childComponent);
            }
            childComponent.render({ style: { height: '100%', width: size, float: 'left' } })
            this.addChild(childComponent);
        }

        let state = new State();
        state.style.height = "100%";
        state.style.width = "100%";
        state.style.display = "block";
        return this.render(state);
    }

    render(newState: State) {
        let promises = [];
        promises.push(super.render(newState));

        var totalWidth = this.getElement().offsetWidth;
        var fluidWidth = totalWidth;
        var totalHeight = this.getElement().offsetHeight;

        // Draw the fixed children
        for (let el of this.fixedChildren) {
            fluidWidth -= el.getElement().offsetWidth;
        }
        // Draw the percentage children
        for (let el of this.perctChildren) {
            let width = (parseFloat(el.getElement().getAttribute('data-size')) / 100 * fluidWidth);
            fluidWidth -= width;
            el.render({ style: { width: width + 'px' } });
        }
        // Draw the fluid children
        for (let el of this.fluidChildren) {
            var width = fluidWidth / this.fluidChildren.length;
            promises.push(el.render({ style: { width: width + 'px' } }));
        }
        return Promise.all(promises);
    }
}