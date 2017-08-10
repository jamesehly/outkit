import { Composite } from "./Composite";
import { ILogger } from "../util/Logger";
import { IAnimator } from "../animator/Animators";
import { State } from "../state/State";
export declare class VerticalLayoutComponent extends Composite {
    private fixedChildren;
    private perctChildren;
    private fluidChildren;
    constructor(logger: ILogger, animator?: IAnimator);
    init(): Promise<any[]>;
    resize(): Promise<any[]>;
    render(newState: State): Promise<any[]>;
}
