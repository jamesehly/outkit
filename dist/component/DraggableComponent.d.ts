import { Composite } from "./Composite";
import { ILogger } from "../util/Logger";
import { IAnimator } from 'outkit-animator';
import { State } from "../state/State";
export declare class DraggableComponent extends Composite {
    private _dragRoot;
    private _x;
    private _y;
    private _top;
    private _left;
    private _parentTop;
    private _parentLeft;
    private _diffX;
    private _diffY;
    constructor(logger: ILogger, animator?: IAnimator);
    dragRoot(flag: boolean): this;
    init(): Promise<State>;
    startDrag: (event: MouseEvent) => void;
    move(element: HTMLElement, x: number, y: number): void;
    stopDrag(): void;
}
