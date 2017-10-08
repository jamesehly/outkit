import { State } from '../state/State';
import { Component } from "./Component";
export interface WindowOptions {
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    placement?: WindowPlacement;
    placementMargin?: number;
}
export declare enum WindowPlacement {
    TopLeft = 0,
    Top = 1,
    TopRight = 2,
    Left = 3,
    Center = 4,
    Right = 5,
    BottomRight = 6,
    Bottom = 7,
    BottomLeft = 8,
}
export default class Window extends Component {
    private _width;
    private _height;
    private _top;
    private _left;
    private _placement;
    private _placementMargin;
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
