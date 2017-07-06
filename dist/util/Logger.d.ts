export interface ILogger {
    log(message: string): any;
    warn(message: string): any;
    info(message: string): any;
    error(message: string): any;
}
export default class Logger implements ILogger {
    private _debug;
    private _c;
    constructor(debug?: boolean);
    log(message: string): void;
    warn(message: string): void;
    info(message: string): void;
    error(message: string): void;
}
