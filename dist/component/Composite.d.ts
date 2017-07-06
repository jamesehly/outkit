import { Component, IComponent } from "./Component";
import { ILogger } from "../util/Logger";
import { IAnimator } from "../animator/Animators";
export interface IComposite extends IComponent {
    getChildren(): Array<IComponent>;
}
export declare class Composite extends Component implements IComposite {
    private _list;
    constructor(logger?: ILogger, animator?: IAnimator);
    addChild(component: IComponent): this;
    removeChild(component: IComponent): this;
    getChild(): IComponent;
    getChildren(): IComponent[];
    relay(message: string): Promise<any>;
}
