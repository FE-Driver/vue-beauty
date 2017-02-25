/**
 * Created by wl on 2017/2/25.
 */

function onWindowResize (func) {
    if (window.onresize) {
        var oldFunc = window.onresize;
        window.onresize = function () {
            oldFunc();
            func();
        }
    } else {
        window.onresize = func;
    }
}


export default onWindowResize;