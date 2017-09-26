import { Component, IComponent } from "./Component";
import Logger from "../util/Logger";
import { OutkitAnimator } from 'outkit-animator';
import Drawer from "./Drawer";
import Overlay from "./Overlay";
import Window from "./Window";
import Draggable from "./Draggable";
import HorizontalLayout from "./HorizontalLayout";
import VerticalLayout from "./VerticalLayout";

export class ComponentFactory {

    component(element: string): IComponent {
        let component = new Component(element)
        return component;
    }

    drawer(element: string): IComponent {
        let component = new Drawer(element);
        component.init();
        return component;
    }

    // @todo figure out how to insert options into the factory methods via options object
    overlay(element: string): IComponent {
        let component = new Overlay(element)
        component.init();
        return component;
    }

    window(element: string): IComponent {
        let component = new Window(element)
        component.init();
        return component;
    }

    draggable(element: string): IComponent {
        let component = new Draggable(element)
        component.init();
        return component;
    }

    hlayout(element: string): IComponent {
        let component = new HorizontalLayout(element)
        component.setAnimator(null);
        component.init();
        return component;
    }

    vlayout(element: string): IComponent {
        let component = new VerticalLayout(element)
        component.setAnimator(null);
        component.init();
        return component;
    }
}