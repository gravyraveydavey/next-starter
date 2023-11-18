/**
 * Returns a function, that, as long as it continues to be invoked, will not be
 * triggered. The function will be called after it stops being called for N
 * milliseconds. If `immediate` is passed, trigger the function on the leading
 * edge, instead of the trailing.
 * Taken from: https://davidwalsh.name/javascript-debounce-function
 * @param {*} fn
 * @param {*} wait
 * @param {*} immediate
 */
const vDebounceHandler = ( fn, wait, immediate ) => {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) fn.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) fn.apply(context, args);
    };
}

export default vDebounceHandler
