import { State } from "./State";
export interface IStateManager {
    getState(index: number): State;
    addState(state: State): any;
    getIndex(): number;
    setIndex(index: number): any;
    getLength(): number;
    getCloneAt(index: number): State;
    getCurrentStateClone(): State;
    getNextStateClone(): State;
    getInitialStateClone(): State;
}
export declare abstract class AbstractStateManager implements IStateManager {
    protected _state: Array<State>;
    protected _index: number;
    constructor();
    getState(index: number): State;
    addState(state: State): void;
    getIndex(): number;
    setIndex(index: number): void;
    getLength(): number;
    getCloneAt(index: number): State;
    getCurrentStateClone(): State;
    getNextStateClone(): State;
    getInitialStateClone(): State;
    protected cloneState(state: any): State;
}
