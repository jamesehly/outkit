import { DrawerComponent } from "../../src/component/DrawerComponent";
import {OutkitAnimator} from "outkit-animator";
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
        sut = new DrawerComponent(new Logger(), new OutkitAnimator());
        sut.setElement(re);
        sut.relay('init');
    });

    it('should open (turn on)', (done) => {
        //Act
        sut.on().then((state) => {
            expect(state.style.left).toBe('0');
            done();
        });
    }); 

    it('should not close (turn off) if it has not been opened', (done) => {
        //Act
        sut.off()
            .then((state) => {
                expect(state.style.left).toBe('-280px');
                done();
            }).catch((err) => {
                console.error(err.stack);
            });
    });

    it('should not close (turn off) if it has been opened', (done) => {
        //Act
        sut.on()
            .then((state) => {
                expect(state.style.left).toBe('0');
                return sut.off()
            })
            .then((state) => {
                expect(state.style.left).toBe('-280px');
                done();
            }).catch((err) => {
                console.error(err.stack);
            });
    });

    it('should open via relay message (turn on)', (done) => {
        //Act
        sut.relay('on')
            .then((state) => {
                expect(state[0].style.left).toBe('0');
                done();
            }).catch((err) => {
                console.error(err.stack);
            });;
    });

    it('should close (turn off)', (done) => {
        //Act
        sut.relay('off')
            .then((state) => {
                expect(state[0].style.left).toBe('-280px');
                done();
            })
            .catch((err) => {
                console.error(err.stack);
            });;
    });
});
