import { State } from "../state/State";
import { IAnimator } from 'outkit-animator';
import { Component } from "./Component";

export class OverlayComponent extends Component {

    private _color: string;
    private _opacity: number;
    private _isOn: boolean;

    constructor(element: string) {
        super(element);

        // Setup defaults
        this._opacity = .8;
        this._color = '#000000';
        this._isOn = false;

        // Relay events
        this.registerEvent('on', () => { return this.on() });
        this.registerEvent('off', () => { return this.off() });
        this.registerEvent('toggle', () => { return this.toggle() });
        this.registerEvent('init', () => { return this.init() });
    }

    opacity(n: number): this {
        if (n < 0) {
            this._logger.error(`Opacity must be greater than or equal to zero.`);
            return this;
        }
        if (n > 1) {
            this._logger.error(`Opacity must be less than or equal to one.`);
            return this;
        }
        this._opacity = n;
        return this;
    }

    color(c: string): this {
        this._color = c;
        return this;
    }

    /**
     * Sets the initial state
     * @returns {Promise<State>} 
     */
    init(): Promise<State> {
        let state = new State();
        state.okClassName = 'ok-overlay';
        state.style.height = "100%";
        state.style.width = "100%";
        state.style.position = "fixed";
        state.style.backgroundColor = this._color;
        state.style.opacity = '0';
        state.style.display = 'none';
        state.style.top = '0';
        state.style.left = '0';

        if (this.getElement()) {
            this.getElement().addEventListener('click', this.clickEvent);
        }

        return this.render(state);
    }

    toggle(): Promise<State> {
        return this._isOn ? this.off() : this.on();
    }

    on(): Promise<State> {
        if (this._isOn)
            return new Promise((resolve, reject) => {
                resolve(this._state);
            });
        this._isOn = true;

        return this.render(this.onState());
    }

    off(): Promise<State> {
        if (!this._isOn)
            return new Promise((resolve, reject) => {
                resolve(this._state);
            });
        this._isOn = false;

        return this.render(this.offState())
            .then((result) => {
                return this.render(this.hiddenState());
            })
    }

    onState(): State {
        let state = new State();
        state.style.display = 'block';
        state.style.opacity = this._opacity.toString();
        return state;
    }

    offState(): State {
        let state = new State();
        state.style.opacity = '0';
        return state;
    }

    hiddenState(): State {
        let state = new State();
        state.style.display = 'none';
        return state;
    }

    private clickEvent = () => {
        this.getRoot().relay('off');
    }
}