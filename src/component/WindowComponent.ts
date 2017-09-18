import { State } from '../state/State';
import { ILogger } from "../util/Logger";
import { IAnimator } from 'outkit-animator';
import { Composite } from "./Composite";

export class WindowComponent extends Composite {

    private _width: number;
    private _height: number;
    private _top: number;
    private _left: number;
    private _isOpen: boolean;

    constructor(logger: ILogger, animator?: IAnimator) {
        super(logger, animator);

        // Setup defaults
        this._width = 0;
        this._height = 0;
        this._top = 0;
        this._left = 0;
        this._isOpen = false;

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
        state.style.width = `${this.getElement().parentElement.offsetWidth / 2}px`;
        state.style.height = `${this.getElement().parentElement.offsetHeight / 2}px`;
        state.style.left = `${this._left}px`;
        state.style.top = `${this._top}px`;
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
        return this.render(state);
    }

    off(): Promise<State> {
        if (!this._isOpen)
            return new Promise((resolve, reject) => {
                resolve(this._state);
            });
        this._isOpen = false;

        let state = new State();
        state.style.display = 'none';
        return this.render(state);
    }
}