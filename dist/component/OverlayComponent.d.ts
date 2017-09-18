import { State } from "../state/State";
import { ILogger } from "../util/Logger";
import { IAnimator } from 'outkit-animator';
import { Component } from "./Component";
export declare class OverlayComponent extends Component {
    private _color;
    private _opacity;
    private _isOn;
    constructor(logger: ILogger, animator?: IAnimator);
    opacity(n: number): this;
    color(c: string): this;
    init(): Promise<State>;
    toggle(): Promise<State>;
    on(): Promise<State>;
    off(): Promise<State>;
    onState(): State;
    offState(): State;
    hiddenState(): State;
    private clickEvent;
}
