// import { ComponentFactory } from "../src/ComponentFactory";
// import { DrawerComponent } from "../src/component/DrawerComponent";

// describe('ComponentFactory Tests', () => {
//     let sut: ComponentFactory;
//     let element: HTMLElement;
//     beforeEach(() => {
//         sut = new ComponentFactory();
//         element = document.createElement('div');
//         element.id = 'element';
//         document.body.appendChild(element);
//     });

//     afterEach(() => {
//         element.remove();
//     });
            
//     it('should make a drawer/overlay combo component', () => {
//         //Act
//         let component = sut.drawer("#element") as DrawerComponent;
//         //Assert
//         expect(component.getRenderElement()).toBe(document.getElementById('element'));
//         expect(typeof component.on).toBe('function');
//         expect(typeof component.off).toBe('function');
//         expect(element.style.left).toBe('-280px');
//     });

//     it('should make a drawer/overlay turn on', () => {
//         //Arrange
//         let component = sut.drawer("#element") as DrawerComponent;
//         //Act
//         component.on().then(() => {
//             expect(element.style.left).toBe('0');
//         })
//     });
// });
    