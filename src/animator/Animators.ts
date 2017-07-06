export interface IAnimator {
    animate(start?: number, ...args : any[]): Promise<boolean>;
    setStep(step: Function): this;
    setDuration(duration: number): this;
    setRate(rate: number): this;
}

export * from './StandardAnimator';