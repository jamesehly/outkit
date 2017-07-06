import { State } from '../state/State';
import { ILogger } from "../util/Logger";
import { IAnimator } from "../animator/Animators";
import { Composite } from "./Composite";

export class DrawerComponent extends Composite {

    private _dock: string;
    private _maxSize: number;
    private _minSize: number;
    private _isOpen: boolean;
    private _dockPositions: string[] = ['left', 'right', 'top', 'bottom'];

    constructor(logger: ILogger, animator?: IAnimator) {
        super(logger, animator);

        // Setup defaults
        this._dock = 'left';
        this._minSize = 0;
        this._maxSize = 280;
        this._isOpen = false;

        // Relay events
        this.registerEvent('on', () => { return this.on() });
        this.registerEvent('off', () => { return this.off() });
        this.registerEvent('toggle', () => { return this.toggle() });
        this.registerEvent('init', () => { return this.init() });
    }

    /**
     * Change the dock position of the drawer.  Calling this function resets the
     * state and repositions the drawer instantly.
     * 
     * @param {string} dock 
     * @returns {this} 
     * @memberof DrawerComponent
     */
    dock(dock: string): Promise<State> {
        return new Promise((resolve, reject) => {
            if (this._dockPositions.indexOf(dock) < 0) {
                this._logger.error(`"${dock}" is not a valid dock position.  Valid positions are ${this._dockPositions.join(', ')}`);
                reject();
            }
            return this.relay('off').then(() => {
                this._dock = dock;
                this._state = null;
                return this.init();
            })
        })
    }

    minSize(n: number): this {
        if (n < 0) {
            this._logger.error(`minSize number must be greater than or equal to zero.`);
            return this;
        }
        this._minSize = n;
        return this;
    }

    maxSize(n: number): this {
        if (n < 0) {
            this._logger.error(`maxSize number must be greater than or equal to zero.`);
            return this;
        }
        this._maxSize = n;
        return this;
    }

    /**
     * Sets the initial state
     * @returns {Promise<State>} 
     */
    init(): Promise<State> {
        let state = new State();
        state.okClassName = 'ok-drawer';
        state.style.position = 'fixed';
        state.style.display = 'block';
        state.style.zIndex = '10000'

        if (this.isLeft()) {
            state.style.width = `${this._maxSize}px`;
            state.style.height = `${this.getElement().parentElement.offsetHeight}px`;
            state.style.left = `-${this._maxSize}px`;
            state.style.top = '0';
        }
        if (this.isRight()) {
            state.style.width = `${this._maxSize}px`;
            state.style.height = `${this.getElement().parentElement.offsetHeight}px`;
            state.style.right = `-${this._maxSize}px`;
            state.style.top = '0';
        }
        if (this.isTop()) {
            state.style.width = `${this.getElement().parentElement.offsetWidth}px`;
            state.style.height = `${this._maxSize}px`;
            state.style.top = `-${this._maxSize}px`;
            state.style.left = '0';
        }
        if (this.isBottom()) {
            state.style.width = `${this.getElement().parentElement.offsetWidth}px`;
            state.style.height = `${this._maxSize}px`;
            state.style.bottom = `-${this._maxSize}px`;
            state.style.left = '0';
        }
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
        if (this.isLeft()) {
            state.style.left = '0';
        }
        if (this.isRight()) {
            state.style.right = '0';
        }
        if (this.isTop()) {
            state.style.top = '0';
        }
        if (this.isBottom()) {
            state.style.bottom = '0'
        }
        state.stateClassName = 'ok-on';

        return this.render(state);
    }

    off(): Promise<State> {
        if (!this._isOpen)
            return new Promise((resolve, reject) => {
                resolve(this._state);
            });
        this._isOpen = false;

        let state = new State();
        if (this.isLeft()) {
            state.style.left = `-${this._maxSize}px`;
        }
        if (this.isRight()) {
            state.style.right = `-${this._maxSize}px`;
        }
        if (this.isTop()) {
            state.style.top = `-${this._maxSize}px`;
        }
        if (this.isBottom()) {
            state.style.bottom = `-${this._maxSize}px`;
        }
        state.stateClassName = 'ok-off';

        return this.render(state);
    }

    private isLeft() {
        return this._dock === 'left';
    }

    private isRight() {
        return this._dock === 'right';
    }

    private isTop() {
        return this._dock === 'top';
    }

    private isBottom() {
        return this._dock === 'bottom';
    }
}