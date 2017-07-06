import { Component, IComponent } from "./Component";
import { ILogger } from "../util/Logger";
import { IAnimator } from "../animator/Animators";

export interface IComposite extends IComponent {
    getChildren(): Array<IComponent>
}

export class Composite extends Component implements IComposite {

    private _list: Array<IComponent>;

    constructor(logger?: ILogger, animator?: IAnimator) {
        super(logger, animator);
        this._list = [];
    }

    addChild(component: IComponent): this {
        this._list.push(component);
        component.setParent(this);
        return this;
    }

    removeChild(component: IComponent): this {
        let index = this._list.indexOf(component);
        this._list.splice(index, 1);
        return this;
    }

    getChild(): IComponent {
        return null;
    }

    getChildren(): IComponent[] {
        return this._list;
    }

    relay(message: string): Promise<any> {
        var promises = [];
        if (typeof this._events[message] === 'function')
            promises.push(this._events[message]());

        for (let child of this._list) {
            if (typeof child === 'object' && typeof child['relay'] === 'function')
                promises.push(child.relay(message));
        }
        return Promise.all(promises);
    }
}