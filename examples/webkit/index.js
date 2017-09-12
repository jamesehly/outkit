import { ComponentFactory } from '../../dist/outkit';
import { OutkitAnimator, AnimatorTransition } from 'outkit-animator';

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
comp.drawer = ok.drawer('#drawer');
comp.drawer.addChild(comp.overlay);

comp.drawer.relay('on');

setTimeout(function() {
    comp.drawer.relay('off');
}, 3000);

const animator = new OutkitAnimator();
animator
    .setDuration(500)
    .setTransition(AnimatorTransition.EaseOut)
    .setRate(16)
    .setStep((x, y, z) => {
        console.log(x, y[0], y[1]);
    })


animator.animate(Date.now, 'Hello World!', 123);