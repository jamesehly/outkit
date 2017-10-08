import { Component } from "./Component";
import { State } from "../state/State";
export default class VerticalLayout extends Component {
    private fixedChildren;
    private perctChildren;
    private fluidChildren;
    constructor(element: string);
    init(): Promise<any>;
    resize(): Promise<any>;
    render(newState: State): Promise<any>;
    private resetChildren();
}
