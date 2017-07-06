var ok = new outkit.ComponentFactory();

var win = ok.window('#window');
win.addChild(ok.overlay("#overlay"));
win.addChild(ok.draggable('#draggable').dragRoot(true));