import { Component } from "../../src/component/Component";
import Logger from "../../src/util/Logger";
import { OutkitAnimator } from "outkit-animator";
import { Promise } from "es6-promise";
import { State } from "../../src/state/State";
if (!window['Promise'])
    window['Promise'] = Promise;

describe('Component Tests', () => {

    let sut: Component;
    let child1: Component;

    beforeEach(() => {
        sut = new Component(new Logger(true), new OutkitAnimator());
        child1 = new Component(new Logger(true), new OutkitAnimator());
    });

    it('should be able to set/get the element', () => {
        //Arrange
        let element = document.createElement('div') as HTMLElement;
        //Act
        sut.setElement(element);
        //Assert
        expect(element).toBe(sut.getElement());
    });

    it('should be able to set/get a child component', () => {
        //Act
        sut.addChild(child1);
        //Assert
        expect(child1).toBe(sut.getChild() as Component);
    });

    it('should be able to register and relay events', () => {
        //Arrange
        var count = 1;
        //Act
        sut.registerEvent('eventname', () => {
            count += 1;
        });
        sut.relay('eventname');
        //Assert
        expect(count).toEqual(2);
    });

    it('should be able to register and relay events to its child', () => {
        //Arrange
        var count = 1;
        child1.registerEvent('eventname', () => {
            count += 1;
        });
        //Act
        sut.addChild(child1);
        sut.registerEvent('eventname', () => {
            count += 1;
        });
        sut.relay('eventname');
        //Assert
        expect(count).toEqual(3);
    })


    it('should be able to set/get state', () => {
        //Arrange
        var state = new State();
        state.style.height = '500px';
        state.style.width = '300px';
        state.style.display = 'block';
        state.style.position = 'absolute';
        state.style.top = '10px';
        state.style.left = '20px';

        //Act
        sut.setState(state);
        let s = sut.getState();

        //Assert
        expect(s.style.height = '500px');
        expect(s.style.width).toBe('300px');
        expect(s.style.display).toBe('block');
        expect(s.style.position).toBe('absolute');
        expect(s.style.top).toBe('10px');
        expect(s.style.left).toBe('20px');
    });

    it('should be able to render state to the element', () => {
        //Arrange
        var state = new State();
        state.style.height = '500px';
        state.style.width = '300px';
        state.style.display = 'block';
        state.style.position = 'absolute';
        state.style.top = '10px';
        state.style.left = '20px';
        let element = document.createElement('div');

        //Act
        sut.setElement(element)
        sut.render(state).then(() => {
            //Assert
            expect(element.style.height = '500px');
            expect(element.style.width).toBe('300px');
            expect(element.style.display).toBe('block');
            expect(element.style.position).toBe('absolute');
            expect(element.style.top).toBe('10px');
            expect(element.style.left).toBe('20px');

            let s = sut.getState();
            expect(s.style.height = '500px');
            expect(s.style.width).toBe('300px');
            expect(s.style.display).toBe('block');
            expect(s.style.position).toBe('absolute');
            expect(s.style.top).toBe('10px');
            expect(s.style.left).toBe('20px');
        });
    });

    
    it('should merge new state with old state', () => {
        //Arange
        var oldState = new State();
        var newState = new State();

        oldState.style.bottom = '10px';
        oldState.style.display = 'block';

        newState.style.bottom = '20px';
        newState.style.height = '100px';

        //Act
        var result = sut.merge(newState, oldState);

        //Assert
        expect(result.style.bottom).toEqual('20px');
        expect(result.style.display).toEqual('block');
        expect(result.style.height).toEqual('100px');
    });
        

});
