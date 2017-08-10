import { ILogger } from "../util/Logger";
import { IAnimator } from "../animator/Animators";
import { State } from "../state/State";
export interface IComponent {
    relay(message: string): Promise<any>;
    registerEvent(name: string, func?: Function): this;
    setElement(element: HTMLElement): this;
    getElement(): HTMLElement;
    getAnimator(): IAnimator;
    addChild(component: IComponent): this;
    removeChild(component: IComponent): this;
    getChild(): IComponent;
    getRoot(): IComponent;
    setParent(parent: IComponent): this;
    render(newState: State): Promise<any>;
}
export declare class Component implements IComponent {
    private _element;
    private _child;
    private _parent;
    protected _logger: ILogger;
    protected _animator: IAnimator;
    protected _events: {
        [id: string]: Function;
    };
    protected _state: State;
    constructor(logger: ILogger, animator?: IAnimator);
    getElement(): HTMLElement;
    setElement(element: HTMLElement): this;
    getAnimator(): IAnimator;
    addChild(component: IComponent): this;
    removeChild(component: IComponent): this;
    getChild(): IComponent;
    setParent(parent: IComponent): this;
    getRoot(): IComponent;
    getState(): State;
    setState(state: State): this;
    registerEvent(name: string, func?: Function): this;
    relay(message: string): Promise<any>;
    merge(newState: any, oldState: any): State;
    render(newState: State): Promise<State>;
    step: (delta: number, args: any[]) => void;
}
