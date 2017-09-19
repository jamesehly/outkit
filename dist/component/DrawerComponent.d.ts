import { State } from '../state/State';
import { Composite } from "./Composite";
export declare class DrawerComponent extends Composite {
    private _dock;
    private _maxSize;
    private _minSize;
    private _isOpen;
    private _dockPositions;
    constructor(element: string);
    dock(dock: string): Promise<State>;
    minSize(n: number): this;
    maxSize(n: number): this;
    init(): Promise<State>;
    toggle(): Promise<State>;
    on(): Promise<State>;
    off(): Promise<State>;
    private isLeft();
    private isRight();
    private isTop();
    private isBottom();
}
