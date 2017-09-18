import { State } from '../state/State';
import { ILogger } from "../util/Logger";
import { IAnimator } from 'outkit-animator';
import { Composite } from "./Composite";
export declare class WindowComponent extends Composite {
    private _width;
    private _height;
    private _top;
    private _left;
    private _isOpen;
    constructor(logger: ILogger, animator?: IAnimator);
    width(n: number): this;
    height(n: number): this;
    top(n: number): this;
    left(n: number): this;
    init(): Promise<State>;
    toggle(): Promise<State>;
    on(): Promise<State>;
    off(): Promise<State>;
}
