import { Composite } from "./Composite";
import { ILogger } from "../util/Logger";
import { IAnimator } from "../animator/Animators";
import { State } from "../state/State";

export class DraggableComponent extends Composite {

    private _dragRoot: boolean;
    private _x: number;
    private _y: number;
    private _top: number;
    private _left: number;
    private _parentTop: number;
    private _parentLeft: number;
    private _diffX: number;
    private _diffY: number;

    constructor(logger: ILogger, animator?: IAnimator) {
        super(logger, animator);

        // Setup defaults
        this._dragRoot = false;

        // Relay events
        this.registerEvent('init', () => { return this.init() });
    }

    dragRoot(flag: boolean): this {
        this._dragRoot = flag;
        return this;
    }

    init(): Promise<State> {
        let state = new State();
        state.okClassName = 'ok-draggable';

        this.getElement().addEventListener('mousedown', this.startDrag);
        this.getElement().addEventListener('mouseup', () => {
            document.onmousemove = () => {};
        });
        return this.render(state);
    }

    startDrag = (event: MouseEvent) => {
        let de = this.getElement();
        if (this._dragRoot) {
            de = this.getRoot().getElement();
        }
        let parent = de.parentElement;

        let x = event.clientX,
            y = event.clientY,
            top = de.offsetTop,
            left = de.offsetLeft,
            deWidth = de.offsetWidth,
            deHeight = de.offsetHeight,
            parentTop = parent.offsetTop,
            parentLeft = parent.offsetLeft,
            parentWidth = parent.offsetWidth,
            parentHeight =parent.offsetHeight,
            diffX = x - left,
            diffY = y - top;

        document.onmousemove = (event: MouseEvent) => {
            let x = event.clientX,
                y = event.clientY,
                aX = x - diffX,
                aY = y - diffY;
            if (aX < 0) aX = 0;
            if (aY < 0) aY = 0;
            if (aX + deWidth > parentWidth) aX = parentWidth - deWidth;
            if (aY + deHeight > parentHeight) aY = parentHeight - deHeight;

            this.move(de, aX, aY);
        }
    }

    move(element: HTMLElement, x: number, y: number) { 
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
    }

    stopDrag() { }
}