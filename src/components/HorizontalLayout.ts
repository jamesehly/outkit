import { IAnimator } from 'outkit-animator';
import { IComponent, Component } from "./Component";
import ElementHelper from "../util/ElementHelper";
import { State } from "../state/State";

export default class HorizontalLayout extends Component {

    private fixedChildren: Array<IComponent>;
    private perctChildren: Array<IComponent>;
    private fluidChildren: Array<IComponent>;

    constructor(element: string) {
        super(element);
        this.resetChildren();
        this.registerEvent('init', () => { return this.init() });
        this.setAnimator(null);
    }

    /**
     * For each child element in elements, set up a new Component figure 
     * out if it has a width set as a pixel value (fixed child), a 100%
     * value (fluid child), or a value set to a specific percentage 
     * (percentage child)
     * 
     * @returns 
     * @memberof HorizontalLayoutComponent
     */
    init() {
        let el = this.getElement();
        this.resetChildren();
        for (let i = 0; i < el.children.length; i++) {
            let child = el.children[i] as HTMLElement;
            if (!child.id)
                ElementHelper.setGuidId(child);
            let childComponent = new Component("#" + child.id);
            childComponent.setAnimator(null);
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
            childComponent.render({ style: { height: '100%', width: size, overflow: 'hidden', float: 'left' } })
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
        state.style.width = this.getElement().parentElement.offsetWidth + 'px';
        return this.render(state);
    }

    render(newState: State): Promise<any> {
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

    /**
     * Sets the chidren arrays to new arrays.
     * @private
     * @memberof HorizontalLayoutComponent
     */
    private resetChildren(): void {
        this.fixedChildren = new Array<IComponent>();
        this.perctChildren = new Array<IComponent>();
        this.fluidChildren = new Array<IComponent>();
    }
}