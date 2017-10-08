import HorizontalLayout from "../../src/components/HorizontalLayout";
import { OutkitAnimator } from "outkit-animator";
import { State } from "../../src/state/State";
import Logger from "../../src/util/Logger";
import { Promise } from "es6-promise";
// Polyfill for PhantomJS
if (!window['Promise']) {
    window['Promise'] = Promise;
}

describe('HorizontalLayout Tests', () => {
    let sut: HorizontalLayout;
    let c1: HTMLElement;
    let c2: HTMLElement;
    let c3: HTMLElement;
    let pe: HTMLElement;
    let re: HTMLElement;

    beforeEach(() => {
        pe = document.createElement('div');
        re = document.createElement('div');
        re.id = 'sut';
        document.body.appendChild(pe);
        pe.appendChild(re);
        c1 = document.createElement('div');
        c2 = document.createElement('div');
        c3 = document.createElement('div');

        re.appendChild(c1);
        re.appendChild(c2);
        re.appendChild(c3);

        // System under test  
        sut = new HorizontalLayout('#sut');
    });

    afterEach(() => {
        pe.remove();
    });

    it('should add each child element as a component and have fluid children', (done) => {
        //Arrange
        pe.style.width = '1000px';
        pe.style.height = '500px';

        //Act
        sut.relay('init').then(() => {
            let children = sut.getChildren();
            expect(children[0].getElement()).toBe(c1);
            expect(children[1].getElement()).toBe(c2);
            expect(children[2].getElement()).toBe(c3);

            expect(children[0].getElement().id).not.toBeNull();
            expect(children[1].getElement().id).not.toBeNull();
            expect(children[2].getElement().id).not.toBeNull();

            expect(children[0].getElement().getBoundingClientRect().width).toBeCloseTo(pe.offsetWidth / children.length, 1);
            expect(children[1].getElement().getBoundingClientRect().width).toBeCloseTo(pe.offsetWidth / children.length, 1);
            expect(children[2].getElement().getBoundingClientRect().width).toBeCloseTo(pe.offsetWidth / children.length, 1);

            expect(children[0].getElement().offsetHeight).toBeCloseTo(500, 1);
            expect(children[1].getElement().offsetHeight).toBeCloseTo(500, 1);
            expect(children[2].getElement().offsetHeight).toBeCloseTo(500, 1);
            done(); 
        })
    });

    it('should set up a holy grail layout', (done) => {
        //Arrange
        pe.style.width = '1000px';
        pe.style.height = '500px';

        c1.setAttribute('data-size', '100px');
        c3.setAttribute('data-size', '100px');

        //Act
        sut.relay('init').then(() => {
            let children = sut.getChildren();
            expect(children[0].getElement().offsetWidth).toBe(100);
            expect(children[1].getElement().offsetWidth).toBe(800);
            expect(children[2].getElement().offsetWidth).toBe(100);

            expect(children[0].getElement().offsetHeight).toBeCloseTo(500, 1);
            expect(children[1].getElement().offsetHeight).toBeCloseTo(500, 1);
            expect(children[2].getElement().offsetHeight).toBeCloseTo(500, 1);
            done();
        })
    });
});