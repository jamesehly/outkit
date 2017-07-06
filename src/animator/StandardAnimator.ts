import { IAnimator } from './Animators';

export default class StandardAnimator implements IAnimator {

    public start: number;
    private _duration: number;
    private _step: Function;
    private _interval: number;
    private _rate: number;

    public constructor() {
        this._duration = 200;
        this._step = () => { };
        this._rate = 16;
    }

    setStep(step: Function): this {
        this._step = step;
        return this;
    }

    setDuration(duration: number): this {
        this._duration = duration;
        return this;
    }

    setRate(rate: number): this {
        this._rate = rate;
        return this;
    }

    /**
     * Animate calling a step function over duration. Step is called with delta
     * time so that animations complete within the duration.
     * @param start date
     */
    animate(start?: number, ...args : any[]): Promise<boolean> {
        return new Promise((resolve) => {
            this._interval = window.setInterval(() => {
                let deltaTime = Date.now();
                let timePassed = deltaTime - start;
                let progress = timePassed / this._duration;

                if (progress > 1) progress = 1

                var delta = progress;

                this._step(delta, args);

                if (progress == 1) {
                    clearInterval(this._interval);
                    resolve(true);
                }
            }, this._rate)
        })
    }
}