import { IAnimator } from './Animators';
export default class StandardAnimator implements IAnimator {
    start: number;
    private _duration;
    private _step;
    private _interval;
    private _rate;
    constructor();
    setStep(step: Function): this;
    setDuration(duration: number): this;
    setRate(rate: number): this;
    animate(start?: number, ...args: any[]): Promise<boolean>;
}
