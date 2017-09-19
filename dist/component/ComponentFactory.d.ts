import { IComponent } from "./Component";
export declare class ComponentFactory {
    component(element: string): IComponent;
    drawer(element: string): IComponent;
    overlay(element: string): IComponent;
    window(element: string): IComponent;
    draggable(element: string): IComponent;
    hlayout(element: string): IComponent;
    vlayout(element: string): IComponent;
}
