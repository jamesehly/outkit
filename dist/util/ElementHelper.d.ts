export default class ElementHelper {
    static changeClass(element: HTMLElement, addClass?: string, removeClass?: string): void;
    static setGuidId(element: HTMLElement): void;
    static queryElement(query: string): HTMLElement;
}
