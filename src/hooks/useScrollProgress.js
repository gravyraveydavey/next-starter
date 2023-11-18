import vDebounceHandler from "../helpers/debouncer";
import React from "react";

export const useScrollProgress = function () {
  const [scrollPercentRounded, setScrollPercentRounded] = React.useState(0);
  const [scrollPercentRanged, setScrollPercentRanged] = React.useState(0);
  const getScrollProgress = React.useCallback(() => {
    // method to determine scroll depth as a %
    // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript
    var h = document.documentElement,
      body = document.body,
      scrollTop = "scrollTop",
      scrollHeight = "scrollHeight";
    const scrollPercent =
      ((h[scrollTop] || body[scrollTop]) /
        ((h[scrollHeight] || body[scrollHeight]) - h.clientHeight)) *
      100;
    // round the % for simplicity
    const scrollPercentRounded =
      Math.round((scrollPercent + Number.EPSILON) * 100) / 100;

    //const scrollPercentRanged = mapToRange( scrollPercentRounded, 0, 100, -100, 100);
    const scrollPercentRanged = mapToRange(
      scrollPercentRounded,
      0,
      100,
      range * -1,
      range
    );
    //console.log( scrollPercentRounded );
    //console.log( scrollPercentRanged );
    setScrollPercentRounded(scrollPercentRounded);
    setScrollPercentRanged(scrollPercentRanged);

    // in react implimentation opting to use state to manage writing custom properties - maybe more performant?
    //body.style.setProperty( '--scrollPercent', scrollPercentRounded );
    //body.style.setProperty( '--scrollRanged', scrollPercentRanged );
  }, []);
  // wrapping scrollProgress function in debounce helpers for ease of add / removal
  const debouncedResize = vDebounceHandler(() => {
    getScrollProgress();
  }, 75);
  const debouncedScroll = vDebounceHandler(() => {
    getScrollProgress();
  }, 5);

  React.useEffect(() => {
    // clean up code
    window.removeEventListener("scroll", debouncedScroll);
    window.removeEventListener("resize", debouncedResize);

    window.addEventListener("scroll", debouncedScroll, { passive: true });
    window.addEventListener("resize", debouncedResize);

    getScrollProgress();

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      window.removeEventListener("resize", debouncedResize);
    };
  }, [debouncedResize, debouncedScroll]);

  const range = 20;
  // Map to range function
  // converts a value (with a given range) to a
  // proportionate value within a new given range
  // https://www.codegrepper.com/code-examples/javascript/map+a+number+to+a+range+js
  const mapToRange = (val, in_min, in_max, out_min, out_max) =>
    ((val - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

  return [scrollPercentRounded, scrollPercentRanged];
};
export default useScrollProgress;
