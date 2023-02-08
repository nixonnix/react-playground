// debounce function
export function debounce(fn, delay) {
  let hasInitiated;
  return function (...args) {
    clearTimeout(hasInitiated);
    hasInitiated = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
}

export function fakePromise(mock) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mock);
    }, 500);
  });
}

// Throttle function
export function throttle(fn, delay) {
  let hasInititated;
  return function (...args) {
    if (hasInititated) {
      return;
    }
    fn.call(this, ...args);
    hasInititated = true;
    setTimeout(() => {
      hasInititated = false;
    }, delay);
  };
}
