// prevent functions from machine-gunning
// pass in a time in ms to prevent a function
// from firing multiple times within that timeframe

const throttle = (fn, wait) => {
  var time = Date.now();
  return () => {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  };
}

export default throttle;
