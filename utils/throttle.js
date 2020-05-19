export const throttle = (func, wait = 100) => {
  let timer = null;
  return (...args) => {
    if (timer === null) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
};
