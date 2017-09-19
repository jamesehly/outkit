import { Composite } from "./Composite";
import { State } from "../state/State";
export declare class HorizontalLayoutComponent extends Composite {
    private fixedChildren;
    private perctChildren;
    private fluidChildren;
    constructor(element: string);
    init(): Promise<any[]>;
    resize(): Promise<any[]>;
    render(newState: State): Promise<any[]>;
    private resetChildren();
}
