var ok = new outkit.ComponentFactory();

var drawer = ok.drawer('#drawer').addChild(ok.overlay("#overlay"));
drawer.getAnimator()
    .setDuration(300)
    .setTransition(outkit.AnimatorTransition.EaseIn);