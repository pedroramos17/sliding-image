import View from './view.js'

const view = new View();

window.onmousedown = e => view.handleOnDown(e);

window.ontouchstart = e => view.handleOnDown(e.touches[0]);

window.onmouseup = e => view.handleOnUp(e);

window.ontouchend = e => view.handleOnUp(e.touches[0]);

window.onmousemove = e => view.handleOnMove(e);

window.ontouchmove = e => view.handleOnMove(e.touches[0]);