var ok = new outkit.ComponentFactory();

var component = ok.component('#component');
init();
var lastState;

function init() {
    var state = { style: {} };
    state.style.top = component.getElement().parentElement.offsetHeight / 2 - 50 + "px";
    state.style.left = component.getElement().parentElement.offsetWidth / 2 - 50 + "px";
    state.style.height = '100px';
    state.style.width = '100px';
    state.style.position = 'absolute';
    lastState = state;
    return component.render(state);
}

function tl() {
    var state = { style: {} };
    state.style.height = '100px';
    state.style.width = '100px';
    state.style.top = '16px';
    state.style.left = '16px';
    lastState = state;
    return component.render(state);
}

function tr() {
    var state = { style: {} };
    state.style.height = '100px';
    state.style.width = '100px';
    state.style.top = '16px';
    state.style.left = component.getElement().parentElement.offsetWidth - 116 + "px";
    lastState = state;
    return component.render(state);
}

function br() {
    var state = { style: {} };
    state.style.height = '100px';
    state.style.width = '100px';
    state.style.top = component.getElement().parentElement.offsetHeight - 116 + "px";
    state.style.left = component.getElement().parentElement.offsetWidth - 116 + "px";
    lastState = state;
    return component.render(state);
}

function bl() {
    var state = { style: {} };
    state.style.height = '100px';
    state.style.width = '100px';
    state.style.top = component.getElement().parentElement.offsetHeight - 116 + "px";
    state.style.left = '16px';
    lastState = state;
    return component.render(state);
}

function shrink() {
    return component.render(lastState);
}

function fill() {
    var state = { style: {} };
    state.style.top = '16px';
    state.style.left = '16px';
    state.style.height = component.getElement().parentElement.offsetHeight - 32 + "px";
    state.style.width = component.getElement().parentElement.offsetWidth - 32 + "px";
    return component.render(state);
}

function a1() {
    tr()
        .then(function () {
            return fill();
        })
        .then(function() {
            return bl();
        });
}

function a2() {
    tl()
        .then(function () {
            return tr();
        })
        .then(function() {
            return br();
        })
        .then(function() {
            return bl();
        }).then(function() {
            return init();
        });
}

function a3() {
    init()
        .then(function () {
            return fill();
        })
        .then(function() {
            return shrink();
        });
}

function a4() {
    init()
        .then(function () {
            return fill();
        })
        .then(function() {
            return tr();
        })
        .then(function () {
            return fill();
        })
        .then(function() {
            return bl();
        })
        .then(function () {
            return fill();
        })
        .then(function() {
            return tl();
        })
        .then(function () {
            return fill();
        })
        .then(function() {
            return br();
        })
        .then(function () {
            return fill();
        });
}