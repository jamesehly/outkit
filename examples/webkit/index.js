import { ComponentFactory } from '../../dist/outkit';

var ok = new ComponentFactory();

var el = {};
el.drawer = document.createElement('div');
el.drawer.id = 'drawer';
el.drawer.style.backgroundColor = '#ddd';

el.overlay = document.createElement('div');
el.overlay.id = 'overlay';

var windowHeight = window.innerHeight;
document.body.style.height = windowHeight + "px";
document.body.style.margin = 0;
document.body.style.padding = 0;

document.body.appendChild(el.overlay);
document.body.appendChild(el.drawer);


var comp = {};
comp.overlay = ok.overlay('#overlay');
comp.drawer = ok.drawer('#drawer', {overlay: comp.overlay});

comp.drawer.open();

setTimeout(function() {
    comp.overlay.off();
}, 3000);