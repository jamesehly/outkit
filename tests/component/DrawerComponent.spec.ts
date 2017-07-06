import { DrawerComponent } from "../../src/component/DrawerComponent";
import StandardAnimator from "../../src/animator/StandardAnimator";
import { State } from "../../src/state/State";
import Logger from "../../src/util/Logger";
import { Promise } from "es6-promise";
// Polyfill for PhantomJS
if (!window['Promise']) {
    window['Promise'] = Promise;
}

describe('DrawerComponent Tests (default options)', () => {

    let sut: DrawerComponent;

    beforeEach(() => {
        let re = document.createElement('div');
        document.body.appendChild(re);

        // System under test  
        sut = new DrawerComponent(new Logger(), new StandardAnimator());
        sut.setElement(re);
        sut.relay('init');
    });

    it('should open (turn on)', () => {
        //Act
        sut.on().then((state) => {
            expect(state.style.left).toBe('0');
        });
    }); 

    it('should not close (turn off) if it has not been opened', () => {
        //Act
        sut.off()
            .then((state) => {
                expect(state.style.left).toBe('-280px');
            }).catch((err) => {
                console.error(err.stack);
            });
    });

    it('should not close (turn off) if it has been opened', () => {
        //Act
        sut.on()
            .then((state) => {
                expect(state.style.left).toBe('0');
                return sut.off()
            })
            .then((state) => {
                expect(state.style.left).toBe('-280px');
            }).catch((err) => {
                console.error(err.stack);
            });
    });

    it('should open via relay message (turn on)', () => {
        //Act
        sut.relay('on')
            .then((state) => {
                expect(state[0].style.left).toBe('0');
            }).catch((err) => {
                console.error(err.stack);
            });;
    });

    it('should close (turn off)', () => {
        //Act
        sut.relay('off')
            .then((state) => {
                expect(state[0].style.left).toBe('-280px');
            })
            .catch((err) => {
                console.error(err.stack);
            });;
    });
});
