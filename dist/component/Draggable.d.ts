import { Composite } from "./Composite";
import { State } from "../state/State";
export default class Draggable extends Composite {
    private _dragRoot;
    private _x;
    private _y;
    private _top;
    private _left;
    private _parentTop;
    private _parentLeft;
    private _diffX;
    private _diffY;
    constructor(element: string);
    dragRoot(flag: boolean): this;
    init(): Promise<State>;
    startDrag: (event: MouseEvent) => void;
    move(element: HTMLElement, x: number, y: number): void;
    stopDrag(): void;
}
