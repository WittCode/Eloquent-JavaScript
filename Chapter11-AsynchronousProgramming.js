// In a synchronous programming model, things happen one at a time. When you call a function that performs a long-running action, it returns only when the action has finished and it can return the result.

// An asynchronous model allows multiple things to happen at the same time. When you start an action, your program continues to run. When the action finishes, the program is informed and gets access to the result.

// Threads maintain their own copy of the stack and local variables are stored in the stack so each thread has its own copy of local variables.

// In a multi-threaded environment many individual threads of programming are running at the same time.

// In an asynchronous environment, a single process thread runs all the time, but it may, for event driven reasons, switch from one function to another. 

// The setTimeout function waits a given number of milliseconds and then calls a function.

setTimeout(() => console.log("Tick"), 1000);

// A promise is an asynchronous action that may complete at some point and produce a value. It is able to notify anyone who is interested when its value is available.

// In the case of asynchronous actions, you could, instead of arranging for a function to be called at some point in the future, return an object that represents this future event.

// The easiest way to create a promise is by calling Promise.resolve(). This function ensures that the value you give it is wrapped in a promise. If it's already a promise it is simply returned.

// A promise is able to notify anyone who is interested when its value is available.

let fifteen = Promise.resolve(15);

// To get the result of a promise you can use its then() method. This method registers a callback function to be called when the promise resolves and produces a value.

fifteen.then(value => console.log(`Got ${value}`));

// A normal value is simply there. A promised value is a value that might already be there or might appear at some point in the future.

function readStorage() {
    console.log("Reading storage!");
}

// ES6 introduced promises.

// We use setTimeout() because we are pretending we are dealing with a server.

function storage(nest, name) {

    // The promise constructor expects a function as an argument, 
    return new Promise(resolve => {
        readStorage();
    });
}