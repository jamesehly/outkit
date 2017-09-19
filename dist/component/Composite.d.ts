import { Component, IComponent } from "./Component";
export interface IComposite extends IComponent {
    getChildren(): Array<IComponent>;
}
export declare class Composite extends Component implements IComposite {
    private _list;
    constructor(element: string);
    addChild(component: IComponent): this;
    removeChild(component: IComponent): this;
    getChild(): IComponent;
    getChildren(): IComponent[];
    relay(message: string): Promise<any>;
}
