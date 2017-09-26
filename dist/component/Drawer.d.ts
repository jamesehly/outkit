import { State } from '../state/State';
import { Composite } from "./Composite";
export interface DrawerOptions {
    dock?: string;
    minSize?: number;
    maxSize?: number;
    isOpen?: boolean;
}
export default class Drawer extends Composite {
    private _dock;
    private _maxSize;
    private _minSize;
    private _isOpen;
    private _dockPositions;
    constructor(element: string, options?: DrawerOptions);
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
