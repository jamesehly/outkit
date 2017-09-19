import { Component, IComponent } from "./Component";
import Logger from "../util/Logger";
import { OutkitAnimator } from 'outkit-animator';
import { DrawerComponent } from "./DrawerComponent";
import { OverlayComponent } from "./OverlayComponent";
import { WindowComponent } from "./WindowComponent";
import { DraggableComponent } from "./DraggableComponent";
import { HorizontalLayoutComponent } from "./HorizontalLayoutComponent";
import { VerticalLayoutComponent } from "./VerticalLayoutComponent";

export class ComponentFactory {

    component(element: string): IComponent {
        let component = new Component(element)
        return component;
    }

    drawer(element: string): IComponent {
        let component = new DrawerComponent(element);
        component.init();
        return component;
    }

    // @todo figure out how to insert options into the factory methods via options object
    overlay(element: string): IComponent {
        let component = new OverlayComponent(element)
        component.init();
        return component;
    }

    window(element: string): IComponent {
        let component = new WindowComponent(element)
        component.init();
        return component;
    }

    draggable(element: string): IComponent {
        let component = new DraggableComponent(element)
        component.init();
        return component;
    }

    hlayout(element: string): IComponent {
        let component = new HorizontalLayoutComponent(element)
        component.setAnimator(null);
        component.init();
        return component;
    }

    vlayout(element: string): IComponent {
        let component = new VerticalLayoutComponent(element)
        component.setAnimator(null);
        component.init();
        return component;
    }
}