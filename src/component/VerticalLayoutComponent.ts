import { Composite } from "./Composite";
import { ILogger } from "../util/Logger";
import Logger from "../util/Logger";
import { IAnimator } from 'outkit-animator';
import { IComponent, Component } from "./Component";
import { ComponentFactory } from "./ComponentFactory";
import ElementHelper from "../util/ElementHelper";
import { State } from "../state/State";

export class VerticalLayoutComponent extends Composite {

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

    /**
     * Initialize the Vertical Layout
     * For each child element in elements, set up a new Component figure 
     * out if it has a height set as a pixel value (fixed child), a 100%
     * value (fluid child), or a value set to a specific percentage 
     * (percentage child)
     * 
     * @returns 
     * @memberof VerticalLayoutComponent
     */
    init() {
        let el = this.getElement();
        let factory = new ComponentFactory();
        for (let i = 0; i < el.children.length; i++) {
            let child = el.children[i] as HTMLElement;
            if (!child.id)
                ElementHelper.setGuidId(child);
            let childComponent = new Component(new Logger());
            childComponent.setElement(document.getElementById(child.id));
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
            childComponent.render({ style: { width: '100%', height: size, overflow: 'hidden', float: 'left' } })
            this.addChild(childComponent);
        }

        window.removeEventListener('resize', this.resize.bind(this));
        window.addEventListener('resize', this.resize.bind(this));

        let state = new State();
        state.style.height = this.getElement().parentElement.offsetHeight + 'px';
        state.style.width = this.getElement().parentElement.offsetWidth + 'px';
        state.style.display = "block";
        state.style.overflow = "hidden";
        state.style.float = "left"
        return this.render(state);
    }

    resize() {
        let state = new State();
        state.style.height = this.getElement().parentElement.offsetHeight + 'px';
        console.log(document.body.offsetHeight)
        state.style.width = this.getElement().parentElement.offsetWidth + 'px';
        return this.render(state);
    }

    render(newState: State) {
        let promises = [];
        promises.push(super.render(newState));

        var totalHeight = this.getElement().offsetHeight;
        var fluidHeight = totalHeight;
        var totalWidth = this.getElement().offsetWidth;

        // Draw the fixed children
        for (let el of this.fixedChildren) {
            fluidHeight -= el.getElement().offsetHeight;
        }
        // Draw the percentage children
        for (let el of this.perctChildren) {
            let height = (parseFloat(el.getElement().getAttribute('data-size')) / 100 * fluidHeight);
            fluidHeight -= height;
            el.render({ style: { height: height + 'px' } });
        }
        // Draw the fluid children
        for (let el of this.fluidChildren) {
            var height = fluidHeight / this.fluidChildren.length;
            promises.push(el.render({ style: { height: height + 'px' } }));
        }
        return Promise.all(promises);
    }
}