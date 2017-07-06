import ElementHelper from "../../src/util/ElementHelper";

describe('ElementHelper Tests', () => {
    it('should add a class when changeClass is called', () => {
        //Arrange
        let el = document.createElement('div');
        el.className = "a b c"

        //Act
        ElementHelper.changeClass(el, 'd');

        //Assert
        expect(el.className).toBe('a b c d');
    });

    it('should remove a class when changeClass is called', () => {
        //Arrange
        let el = document.createElement('div');
        el.className = "a b c"

        //Act
        ElementHelper.changeClass(el, null, 'b');

        //Assert
        expect(el.className).toBe('a c');
    });

    it('should add and remove a class when changeClass is called', () => {
        //Arrange
        let el = document.createElement('div');
        el.className = "a b c"

        //Act
        ElementHelper.changeClass(el, 'e', 'b');

        //Assert
        expect(el.className).toBe('a c e');
    });

    it('should not add a class if it already exists when changeClass is called', () => {
        //Arrange
        let el = document.createElement('div');
        el.className = "a b c"

        //Act
        ElementHelper.changeClass(el, 'a');

        //Assert
        expect(el.className).toBe('a b c');
    });

    it('should not fail when trying to remove a class that does not exist changeClass is called', () => {
        //Arrange
        let el = document.createElement('div');
        el.className = "a b c"

        //Act
        ElementHelper.changeClass(el, null, 'f');

        //Assert
        expect(el.className).toBe('a b c');
    });
});