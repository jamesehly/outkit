import { AbstractStateManager, IStateManager } from "./AbstractStateManager";
import { State } from "./State";
export declare class DefinedStateManager extends AbstractStateManager implements IStateManager {
    addState(state: State): void;
}
