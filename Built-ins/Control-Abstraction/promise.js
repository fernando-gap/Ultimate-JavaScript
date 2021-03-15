// Built-ins

/**
 * Control Abstraction
 */

Promise
/* The Promise object represents the eventual completion (or failure)
of an asynchronous operation and its resulting value. */

const promise = new Promise((resolve, reject) => { /* Body function */ });
// Syntax - new Promise(executor);

Promise.all([promises, promises]);
// Syntax - Promise.all(iterable);A

/* The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error. */


Promise.allSettled();

// The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

// It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.

// Syntax - Promise.allSettled(iterable);


Promise.any();

// Promise.any() takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors. Essentially, this method is the opposite of Promise.all().

// Syntax - Promise.any(iterable);

// This method is useful for returning the first promise that fulfills. It short-circuits after a promise fulfills, so it does not wait for the other promises to complete once it finds one.


Promise.race()
// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

// Syntax - Promise.race(iterable);


Promise.reject(reason);
// The Promise.reject() method returns a Promise object that is rejected with a given reason.


Promise.resolve(value);
// Promise.resolve()
// The Promise.resolve() method returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned; if the value is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value. This function flattens nested layers of promise-like objects (e.g. a promise that resolves to a promise that resolves to something) into a single layer.


