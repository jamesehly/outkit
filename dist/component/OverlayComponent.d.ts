import { State } from "../state/State";
import { Component } from "./Component";
export declare class OverlayComponent extends Component {
    private _color;
    private _opacity;
    private _isOn;
    constructor(element: string);
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
