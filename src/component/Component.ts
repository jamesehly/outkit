import { ILogger } from "../util/Logger";
import { IAnimator } from "../animator/Animators";
import { State } from "../state/State";
import ElementHelper from "../util/ElementHelper";


export interface IComponent {
    relay(message: string): Promise<any>;
    registerEvent(name: string, func?: Function): this;
    setElement(element: HTMLElement): this;
    getElement(): HTMLElement;
    addChild(component: IComponent): this;
    removeChild(component: IComponent): this;
    getChild(): IComponent;
    getRoot(): IComponent;
    setParent(parent: IComponent): this;
    render(newState: State): Promise<any>;
}

export class Component implements IComponent {

    private _element: HTMLElement;
    private _child: IComponent;
    private _parent: IComponent;

    protected _logger: ILogger;
    protected _animator: IAnimator;
    protected _events: { [id: string]: Function };
    protected _state: State;

    constructor(logger: ILogger, animator?: IAnimator) {
        this._events = {};
        this._logger = logger;
        this._animator = animator;
        this._state = null;
        if (this._animator !== null) {
            this._animator.setStep(this.step);
        }
    }

    getElement(): HTMLElement {
        return this._element;
    }

    setElement(element: HTMLElement): this {
        this._element = element;
        return this;
    }

    addChild(component: IComponent): this {
        this._child = component;
        component.setParent(this);
        return this;
    }

    removeChild(component: IComponent): this {
        this._child = null;
        return this;
    }

    getChild(): IComponent {
        return this._child;
    }

    setParent(parent: IComponent) {
        this._parent = parent;
        return this;
    }

    getRoot(): IComponent {
        if (this._parent && typeof this._parent['getRoot'] === 'function') {
            return this._parent.getRoot();
        }
        return this;
    }

    getState(): State {
        return this._state;
    }

    setState(state: State): this {
        this._state = state;
        return this;
    }

    registerEvent(name: string, func?: Function): this {
        this._events[name] = func;
        return this;
    }

    relay(message: string): Promise<any> {
        let promises = []
        if (typeof this._events[message] === 'function')
            promises.push(this._events[message]());

        let child = this.getChild();
        if (typeof child === 'object' && typeof child['relay'] === 'function')
            promises.push(this.getChild().relay(message));
        return Promise.all(promises);
    }

    merge(newState, oldState) {
        let state = new State();
        state = Object.assign(state, oldState, newState);
        state.style = Object.assign({}, oldState.style, newState.style);
        return state;
    }

    /**
     * Draw the current state onto the element, only changing the items that have
     * changed since the last draw.
     * @returns {Promise<State>}
     * @memberof Component
     */
    render(newState: State): Promise<State> {
        let oldState = this._state;
        let isInitial = false;
        if (!this._state) {
            oldState = new State();
            isInitial = true;
            this._element.style.cssText = null; // clear inline stlyles
        } else {
            newState = this.merge(newState, oldState);
        }

        return new Promise((resolve, reject) => {
            if (!this._element) {
                this._logger.error(`Element is undefined.  Use setElement() before calling render().`)
                reject(oldState);
                return;
            }

            if (newState.stateClassName && newState.stateClassName != oldState.stateClassName) {
                ElementHelper.changeClass(this._element, newState.stateClassName, oldState.stateClassName);
            }

            if (newState.okClassName && newState.okClassName != oldState.okClassName) {
                ElementHelper.changeClass(this._element, newState.okClassName, oldState.okClassName);
            }

            // Loop through non animatable properties on style and set them
            for (let name in newState.style) {
                if (this._animator && (State.animated('style.' + name) && newState.style[name] !== null) && !isInitial)
                    continue;

                let ns = newState.style[name];
                let os = oldState.style[name];

                if (ns === os)
                    continue;

                this._element.style[name] = ns;
            }

            // Initial state
            if (isInitial) {
                this._logger.log(`[Initial State][#${this._element.id}]:  ${JSON.stringify(newState)} ]`);
                this._state = newState;
                resolve(newState);
                return;
            }

            // Start the animator to animate any animatable properties
            if (this._animator) {
                let n: number = Date.now();
                return this._animator.animate(n, newState, oldState)
                    .then((finished) => {
                        if (finished) {
                            this._logger.log(`[Updated State][#${this._element.id}]:  ${JSON.stringify(newState)} ]`);
                            this._state = newState;
                            resolve(newState);
                        }
                    });
            }
            // No animator, so just resolve
            this._state = newState;
            resolve(newState);
        });
    }

    public step = (delta: number, args: any[]) => {
        // Loop through values and make live changes to element
        var newState = args[0];
        var oldState = args[1];
        for (let name in newState.style) {
            if (!State.animated('style.' + name))
                continue;

            let ns = newState.style[name];
            let os = oldState.style[name];

            if (ns === os)
                continue;

            let nsv = parseFloat(ns);
            let osv = parseFloat(os);

            if (isFinite(nsv) && isFinite(osv)) {
                let value = (nsv - osv) * delta + osv + '';
                if ((!isFinite(ns) && ns.match(/px$/)) || (!isFinite(os) && os.match(/px$/))) 
                    value = `${value}px`;
                this._element.style[name] = value;
            }
        }
    }
}

