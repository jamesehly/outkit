export interface ILogger {
    log(message:string);
    warn(message:string);
    info(message:string);
    error(message:string);
}

export default class Logger implements ILogger {
    private _debug: boolean;
    private _c = {
        warn: (m: string) => {},
        error: (m: string) => {},
        info: (m: string) => {},
        log: (m: string) => {}
    };

    constructor(debug: boolean = false) {
        if (typeof window['console'] === 'object' && debug)
            this._c = window.console;
        this._debug = debug;
    }

    log(message: string) {
        if (this._debug && typeof this._c.log === 'function')
            this._c.log(message);
    }

    warn(message: string) {
        if (this._debug && typeof this._c.warn === 'function')
            this._c.warn(message);
    }

    info(message: string) {
        if (this._debug && typeof this._c.info === 'function')
            this._c.info(message);
    }

    error(message: string) {
        if (this._debug && typeof this._c.error === 'function')
            this._c.error(message);
    }
}