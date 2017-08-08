export declare class State {
    okClassName?: string;
    stateClassName?: string;
    style?: {
        height?: string;
        width?: string;
        overflow?: string;
        float?: string;
        position?: string;
        zIndex?: string;
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
        display?: string;
        backgroundColor?: string;
        opacity?: string;
    };
    static readonly animatedProps: Array<string>;
    constructor();
    static animated(type: string): boolean;
}
