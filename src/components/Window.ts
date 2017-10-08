import { State } from '../state/State';
import { IAnimator } from 'outkit-animator';
import { Component } from "./Component";

export interface WindowOptions {
    width?: number,
    height?: number,
    top?: number,
    left?: number,
    placement?: WindowPlacement,
    placementMargin?: number
}

export enum WindowPlacement {
    TopLeft,
    Top,
    TopRight,
    Left,
    Center,
    Right,
    BottomRight,
    Bottom,
    BottomLeft
}

export default class Window extends Component {

    private _width: number;
    private _height: number;
    private _top: number;
    private _left: number;
    private _placement: WindowPlacement;
    private _placementMargin: number;
    private _isOpen: boolean;

    constructor(element: string, options?: WindowOptions) {
        super(element);

        // Setup defaults
        this._width = options.width || 100;
        this._height = options.height || 100;
        this._top = options.top || 0;
        this._left = options.left || 0;
        this._placement = WindowPlacement.Center
        this._isOpen = false;
        this._placementMargin = 32;

        // Relay events
        this.registerEvent('on', () => { return this.on() });
        this.registerEvent('off', () => { return this.off() });
        this.registerEvent('toggle', () => { return this.toggle() });
        this.registerEvent('init', () => { return this.init() });
    }

    width(n: number): this {
        if (n < 0) {
            this._logger.error(`Width must be greater than or equal to zero.`);
            return this;
        }
        this._width = n;
        return this;
    }

    height(n: number): this {
        if (n < 0) {
            this._logger.error(`Height must be greater than or equal to zero.`);
            return this;
        }
        this._height = n;
        return this;
    }

    top(n: number): this {
        this._top = n;
        return this;
    }

    left(n: number): this {
        this._left = n;
        return this;
    }

    /**
     * Sets the initial state
     * @returns {Promise<State>} 
     */
    init(): Promise<State> {
        let state = new State();
        state.okClassName = 'ok-window'
        state.style.position = 'absolute';
        state.style.display = 'none';
        state.style.zIndex = '9999'
        state.style.width = `${this._width}px`;
        state.style.height = `${this._height}px`;
        state.style.opacity = '0';
        let left = '0';
        let top = '0';
        let parentWidth = this.getElement().parentElement.offsetWidth;
        let parentHeight = this.getElement().parentElement.offsetHeight;
        let margin = this._placementMargin;
        let right = parentWidth - this._width - margin;
        let center = parentWidth / 2 - this._width / 2;
        let middle = parentHeight / 2 - this._height / 2;
        let bottom = parentHeight - this._height - margin;
        if (this._placement) {
            switch (+this._placement) {
                case WindowPlacement.TopLeft:
                    left = `${margin}px`;
                    top = `${margin}px`;
                    break;

                case WindowPlacement.Top:
                    left = `${center}px`;
                    top = `${margin}px`;
                    break;

                case WindowPlacement.TopRight:
                    left = `${right}px`;
                    top = `${margin}px`;
                    break;

                case WindowPlacement.Left:
                    left = `${margin}px`;
                    top = `${middle}px`;
                    break;

                case WindowPlacement.Center:
                    left = `${center}px`;
                    top = `${middle}px`;
                    break;

                case WindowPlacement.Right:
                    left = `${right}px`;
                    top = `${middle}px`;
                    break;

                case WindowPlacement.BottomLeft:
                    left = `${margin}px`;
                    top = `${bottom}px`;
                    break;

                case WindowPlacement.Bottom:
                    left = `${center}px`;
                    top = `${bottom}px`;
                    break;

                case WindowPlacement.BottomRight:
                    left = `${right}px`;
                    top = `${bottom}px`;
                    break;

                default:
                    left = `${center}px`;
                    top = `${middle}px`;
                    break;
            }
        }
        else {
            left = `${this._left}px`;
            top = `${this._top}px`;
        }

        state.style.left = left;
        state.style.top = top;

        return this.render(state);
    }

    toggle(): Promise<State> {
        return this._isOpen ? this.off() : this.on();
    }

    on(): Promise<State> {
        if (this._isOpen)
            return new Promise((resolve, reject) => {
                resolve(this._state);
            });
        this._isOpen = true;

        let state = new State();
        state.style.display = 'block';
        state.style.opacity = '1';
        return this.render(state);
    }

    off(): Promise<State> {
        if (!this._isOpen)
            return new Promise((resolve, reject) => {
                resolve(this._state);
            });
        this._isOpen = false;

        let state = new State();
        state.style.opacity = '0';

        return this.render(state)
            .then((result) => {
                let state = new State();
                state.style.display = 'none';
                return this.render(state);
            })
    }
}