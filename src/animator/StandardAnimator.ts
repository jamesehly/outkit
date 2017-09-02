import { IAnimator } from './Animators';

/**
 * Outkit's Animator Class
 * 
 * @export
 * @package Outkit
 * @class StandardAnimator
 * @implements {IAnimator}
 */
export default class StandardAnimator implements IAnimator {

    public start: number;
    private _duration: number;
    private _step: Function;
    private _interval: number;
    private _rate: number;
    private _transition: Function;

    public constructor() {
        this._duration = 200;
        this._step = () => { };
        this._rate = 16;
        this._transition = this.linear;
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

    setTransition(transition: AnimatorTransition) {
        switch (transition) {
            case AnimatorTransition.EaseIn:
                this._transition = this.easeIn;
                break;
            case AnimatorTransition.EaseOut:
                this._transition = this.easeOut;
                break;
            case AnimatorTransition.EaseInOut:
                this._transition = this.easeInOut;
                break;
            case AnimatorTransition.PullIn:
                this._transition = this.pullIn;
                break;
            case AnimatorTransition.PushOut:
                this._transition = this.pushOut;
                break;
                case AnimatorTransition.PushPull:
                this._transition = this.pushPull;
                break;
            default:
                this._transition = this.linear;
                break;
        }
    }

    /**
     * Animate calling a step function over duration. Step is called with delta
     * time so that animations complete within the duration.
     * @param start date
     */
    animate(start?: number, ...args: any[]): Promise<boolean> {
        return new Promise((resolve) => {
            if (typeof window['requestAnimationFrame'] === 'function') {
                let start = performance.now();
                const rafAnimate = (time) => {
                    let progress = (time - start) / this._duration;
                    if (progress > 1) progress = 1;
 
                    // calculate the current animation state
                    let delta = this._transition(progress)

                    this._step(delta, args);

                    if (progress < 1) {
                        requestAnimationFrame(rafAnimate);
                    } else {
                        resolve(true);
                    }  
                }
                requestAnimationFrame(rafAnimate);
            } else {
                this._interval = window.setInterval(() => {
                    let deltaTime = Date.now();
                    let timePassed = deltaTime - start;
                    let progress = timePassed / this._duration;

                    if (progress > 1) progress = 1

                    var delta = this._transition(progress);

                    this._step(delta, args);

                    if (progress == 1) {
                        clearInterval(this._interval);
                        resolve(true);
                    }
                }, this._rate)
            }
        })
    }

    private linear(progress: number) {
        return progress;
    }

    private easeIn(progress: number) {
        return Math.pow(progress, 5);
    }

    private easeOut = this.makeEaseOut(this.easeIn);

    private easeInOut = this.makeEaseInOut(this.easeIn);

    private pullIn(progress: number, x: number = 2) {
        return Math.pow(progress, 2) * ((x + 1) * progress - x)
    }

    private pushOut = this.makeEaseOut(this.pullIn);

    private pushPull = this.makeEaseInOut(this.pullIn);

    private makeEaseOut(timing: Function) {
        return function (progress: number) {
            return 1 - timing(1 - progress);
        }
    }

    private makeEaseInOut(timing) {
        return function (progress) {
            if (progress < .5)
                return timing(2 * progress) / 2;
            else
                return (2 - timing(2 * (1 - progress))) / 2;
        }
    }
}

export enum AnimatorTransition {
    Linear,
    EaseIn,
    EaseOut,
    EaseInOut,
    PullIn,
    PushOut,
    PushPull
}