import { IAnimator } from 'outkit-animator';
import { ILogger } from "../util/Logger";
import { State } from "../state/State";
export interface IComponent {
    relay(message: string): Promise<any>;
    registerEvent(name: string, func?: Function): this;
    setElement(element: HTMLElement): this;
    getElement(): HTMLElement;
    getAnimator(): IAnimator;
    setAnimator(animator: IAnimator): this;
    addChild(component: IComponent): this;
    removeChild(component: IComponent): this;
    getChildren(): Array<IComponent>;
    getRoot(): IComponent;
    setParent(parent: IComponent): this;
    render(newState: State): Promise<any>;
}
export declare class Component implements IComponent {
    private _parent;
    private _children;
    protected _element: HTMLElement;
    protected _logger: ILogger;
    protected _animator: IAnimator;
    protected _events: {
        [id: string]: Function;
    };
    protected _state: State;
    constructor(element: string);
    getElement(): HTMLElement;
    setElement(element: HTMLElement): this;
    getAnimator(): IAnimator;
    setAnimator(animator: IAnimator): this;
    addChild(component: IComponent): this;
    removeChild(component: IComponent): this;
    getChildren(): IComponent[];
    setParent(parent: IComponent): this;
    getRoot(): IComponent;
    getState(): State;
    setState(state: State): this;
    registerEvent(name: string, func?: Function): this;
    relay(message: string): Promise<any>;
    merge(newState: any, oldState: any): State;
    render(newState: State): Promise<State>;
    private isAnimatedStyle(name);
    private changeClassName(newClass, oldClass);
    private setStaticProperties(newState, oldState, isInitial);
    step: (delta: number, args: any[]) => void;
}
