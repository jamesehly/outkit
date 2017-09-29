import { Component } from "./Component";
import { State } from "../state/State";
export default class HorizontalLayout extends Component {
    private fixedChildren;
    private perctChildren;
    private fluidChildren;
    constructor(element: string);
    init(): Promise<any>;
    resize(): Promise<any>;
    render(newState: State): Promise<any>;
    private resetChildren();
}
