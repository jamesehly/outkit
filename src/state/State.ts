export class State {
    // possibly refactor these classes into an array of classes that are managed
    // via methods in this class
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
        marginTop?: string;
        marginBottom?: string;
        marginLeft?: string;
        marginRight?: string;
        paddingTop?: string;
        paddingBottom?: string;
        paddingLeft?: string;
        paddingRight?: string;
    }
    static readonly animatedProps: Array<string> = [
        'style.height', 
        'style.width', 
        'style.top', 
        'style.bottom', 
        'style.left', 
        'style.right', 
        'style.opacity', 
        'style.zIndex',
        'string.marginTop',
        'string.marginBottom',
        'string.marginLeft',
        'string.marginRight', 
        'string.paddingTop',
        'string.paddingBottom',
        'string.paddingLeft',
        'string.paddingRight',
        ];
    
    constructor() {
        this.okClassName = '';
        this.stateClassName = '';
        this.style = {};
        }

    static animated(type: string) {
        var index = this.animatedProps.indexOf(type);
        return index >= 0;
    } 
}
