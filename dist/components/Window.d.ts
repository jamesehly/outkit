import { State } from '../state/State';
import { Component } from "./Component";
export interface WindowOptions {
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
}
export default class Window extends Component {
    private _width;
    private _height;
    private _top;
    private _left;
    private _isOpen;
    constructor(element: string, options?: WindowOptions);
    width(n: number): this;
    height(n: number): this;
    top(n: number): this;
    left(n: number): this;
    init(): Promise<State>;
    toggle(): Promise<State>;
    on(): Promise<State>;
    off(): Promise<State>;
}
