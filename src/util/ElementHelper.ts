export default class ElementHelper {

    /**
     * Changes an elements class by adding the "addClass" string and/or
     * removing the "removeClass" string
     * 
     * @static
     * @param {HTMLElement} element 
     * @param {string} newClass 
     * @param {string} oldClass 
     * @memberof ElementKit
     */
    public static changeClass(element: HTMLElement, addClass?: string, removeClass?: string): void {
        let classList = element.className.split(' ');
        // Remove oldClass
        if(removeClass) {
            let oldIndex = classList.indexOf(removeClass);
            if(oldIndex >= 0) {
                classList.splice(oldIndex, 1);
            }
        }
        // Add newClass
        if(addClass) {
            let newIndex = classList.indexOf(addClass);
            if(newIndex < 0) {
                classList.push(addClass);
            }
        }
        element.className = classList.join(' ');
    }
}