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
        let component = new Component(new Logger(), new OutkitAnimator())
        component.setElement(this.getElement(element));
        return component;
    }

    drawer(element: string): IComponent {
        let component = new DrawerComponent(new Logger(), new OutkitAnimator());
        let el = this.getElement(element);
        component.setElement(el);
        component.init();
        return component;
    }

    // @todo figure out how to insert options into the factory methods via options object
    overlay(element: string): IComponent {
        let component = new OverlayComponent(new Logger(), new OutkitAnimator())
        component.setElement(this.getElement(element));
        component.init();
        return component;
    }

    window(element: string): IComponent {
        let component = new WindowComponent(new Logger(), new OutkitAnimator())
        component.setElement(this.getElement(element));
        component.init();
        return component;
    }

    draggable(element: string): IComponent {
        let component = new DraggableComponent(new Logger(), new OutkitAnimator())
        component.setElement(this.getElement(element));
        component.init();
        return component;
    }

    hlayout(element: string): IComponent {
        let component = new HorizontalLayoutComponent(new Logger())
        component.setElement(this.getElement(element));
        component.init();
        return component;
    }

    vlayout(element: string): IComponent {
        let component = new VerticalLayoutComponent(new Logger())
        component.setElement(this.getElement(element));
        component.init();
        return component;
    }

    private getElement(query: string): HTMLElement {
        return document.querySelectorAll(query)[0] as HTMLElement;
    }
}