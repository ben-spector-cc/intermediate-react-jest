## Example: What is Jest?

### Learning Standard Text

From [Jest's documentation](https://jestjs.io/), "Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly."

### Tags

JavaScript, Testing, Jest

### Additional Notes / Resources Used

Sources:
* https://jestjs.io/

<hr>

## Installing Jest

### Learning Standard Text

Jest will be included by default when initializing a React app using `create-react-app`.

When manually installing Jest with `npm`, use the following command:

```sh
npm install --save-dev jest
```

Though not required, the `--save-dev` flag will add this library as a development dependency rather than a production dependency. This dependency can be seen in the **package.json** file:

```js
"devDependencies": {
  "jest": "^26.6.3"
},
```

### Tags

JavaScript, Testing, Jest

### Additional Notes / Resources Used

Sources:
* https://jestjs.io/docs/getting-started

<hr>

## Running Jest Tests

### Learning Standard Text

To run a test using Jest, the **package.json** file must have the `"test"` script set to `"jest"`:

```js
{
  "scripts": {
    "test": "jest"
  }
}
```

With this configuration, `npm test` can be used from the terminal to execute all test files. Jest will automatically look for files that have the **.test.js** or **.spec.js** suffix (as well as **.js** files in a **__test__** directory).


### Tags

JavaScript, Testing, Jest

### Additional Notes / Resources Used

Sources:
* https://jestjs.io/docs/getting-started

<hr>

## The `test()` function

### Learning Standard Text

Every Jest test begins with the `test()` function, which accepts two arguments:
1. A string describing the functionality being tested
2. A callback function containing the testing logic to execute

Each `test()` function call will produce a separate line in the testing report. In order for a given test to pass, the test must run without throwing errors or containing failed `expect()` assertions.

The `it()` function is an alias for `test()`.

### Tags

JavaScript, Testing, Jest

### Additional Notes / Resources Used

For example, consider this test:

```js
// myTest.test.js

test('true is not false', () => {
  expect(true).not.toBe(false);
});

test('addition is hard', () => {
  expect(2 + 2).toBe(5);
});
```

Running `npm test` for the **myTest.test.js** file will produce the following output:

```sh
FAIL  myTest.test.js
✓ true is not false
✕ addition is hard
```

Sources:
* https://jestjs.io/docs/getting-started

<hr>

## The `expect()` function and matchers

### Learning Standard Text

The Jest library provides the `expect()` function to validate various aspects of your code. Each call to `expect()` is typically appended by a matcher method like so:

```js
expect(expressionToValidate).matcherMethod(expectedValue)
```

The value passed to `expect()` should be an expression that you wish to validate while the matcher appended to `expect()` determines how that expression will be validated. 

[Jest documentation](https://jestjs.io/docs/expect) contains a list of match methods outlining input types and outcomes.

### Tags

JavaScript, Testing, Jest

### Additional Notes / Resources Used

This example demonstrates a number of common matchers that each result in a passing test.

```js
test('basic matchers with expect', () => {
  // .toBe uses `===` to determine equality
  expect('Hello' + 'World').toBe('HelloWorld');
  
  // .toEqual should be used to check for deep equality of objects
  expect({a: 1, b: [1,2,3]}).toEqual({a: 1, b: [1,2,3]});
  
  // the .not property can be prepended to any matcher method
  expect('').not.toHaveLength(1);
  expect(undefined).not.toBeDefined();

  // Some other useful matchers
  expect(5 > 2).toBeTruthy();
  expect(['lions', 'tigers', 'bears']).toContain('tigers');
});
```

Sources:
* https://jestjs.io/docs/getting-started

<hr>

## False Positives in Jest with Asynchronous Code

### Learning Standard Text

Jest will automatically pass a test that it perceives to have no `expect()` assertions or errors. As a result, false positives are likely to occur when naively testing code with asynchronous functionality.

To ensure that Jest waits for asynchronous assertions to be made before marking a test as complete, there are two asynchronous patterns that Jest supports, each with their own syntax for testing:

1. Asynchronous callback execution can be tested with the `done()` parameter function.
2. Promise resolve/reject values can be tested with the `.resolves` and `.rejects` matchers and the `async`/`await` keywords.

### Tags

JavaScript, Testing, Jest

### Additional Notes / Resources Used

In this example, you would expect the assertion to fail. However, because the assertion is executed on a delay, the test will finish and pass before the assertion is ever made. 

```js
const asyncGreeting = callback => {
  setTimeout(() => {
    const data = 'Hello';
    callback(data);
  }, 1000);
}

test('a false positive test', () => {
  asyncGreeting(data => {
    expect(data).toBe('Goodbye'); // this should fail but...
  });

  // ...Jest doesn't see the expect() in time so it passes!
});
```

Sources:
* https://www.pluralsight.com/guides/test-asynchronous-code-jest
* https://jestjs.io/docs/asynchronous#resolves--rejects

<hr>

## Testing Async Code - Async Callbacks

### Learning Standard Test

When testing asynchronous code that uses a callback to deliver a response, the `test()` function argument should accept the `done()` callback function as a parameter. Jest will wait for `done()` to be called before marking a test as complete. 

You should execute `done()` immediately after `expect()` assertions have been made within a `try` block and then again within a `catch` block to display any thrown error messages in the output log.

### Tags

JavaScript, Testing, Jest

### Additional Notes / Resources Used

In this example, `asyncGreeting()` is the function that we want to test. We put the assertions inside the callback passed to `asyncGreeting()` and we make sure to call `done()` after the `expect()` assertion is made. 

We do this in a `try` block because if the `expect()` assertion fails, it will throw an error preventing  the `done()` function from being called and thus causing the test to fail on a timeout. The result of this is that the output log will show a timeout error rather than the error thrown by the `expect()`. So, we use a `catch` block and pass the `error` to `done()` which will then display the thrown error in the output log.

```js
function asyncGreeting(callback) {
  setTimeout(()=> {
    data = 'Hello';
    callback(data);
  }, 1000)
}

test('async callbacks test', done => {
  asyncGreeting(data => {
    try {
      expect(data).toBe('Goodbye');
      done();
    } catch (error) {
      done(error);
    }
  });
});
```


Sources:
* https://www.pluralsight.com/guides/test-asynchronous-code-jest
* https://jestjs.io/docs/asynchronous

<hr>

## Testing Async Code - Promises

### Learning Standard Test

When testing asynchronous code that returns a Promise, the `.resolves` and `.rejects` matchers may be used.  

You must `await` the assertion that uses the `.resolves` or `.rejects` matchers and the testing function must be marked as `async`.

### Tags

JavaScript, Testing, Jest

### Additional Notes / Resources Used

The `.resolves` and `.rejects` matchers turn the `expect()` statement into a Promise. Returning this statement from the `test()` function will inform Jest that it should wait for the Promise being tested to resolve/reject.

Using `async` / `await` is syntactic sugar that can be used instead of returning the `expect()` statement

Example: 

```js
function makeRequest(isSuccessful) {
  return new Promise((resolve, reject) => {
    isSuccessful ? resolve("Hurray!") : reject ("Boo");
  })
}

// Using async/await
test('the Promise should resolve', async () => {
  await expect(makeRequest(true)).resolves.toBe('Hurray!');
});

test('the Promise should be rejected', async () => {
  await expect(makeRequest(false)).rejects.toBe('Boo');
});

// Returning the Promise
test('the Promise should resolve', () => {
  return expect(makeRequest(true)).resolves.toBe('Hurray!');
});

test('the Promise should be rejected', () => {
  return expect(makeRequest(false)).rejects.toBe('Boo');
});
```


Sources:
* https://www.pluralsight.com/guides/test-asynchronous-code-jest
* https://jestjs.io/docs/asynchronous

<hr>

## Mocking functions with `jest.fn()`

### Learning Standard Text

The Jest library provides the `jest.fn()` function for creating a "mock" function. 
* An optional implementation function may be passed to `jest.fn()` to define the mock function's behavior and return value. 
* The mock function's behavior may be further specified using various methods provided to the mock function such as `.mockReturnValueOnce()`.
* If no implementation function is provided, the mock function returns `undefined`. 
* The mock function's usage (how it was called, what it returned, etc...) may be validated using the the [`expect()` API](https://jestjs.io/docs/expect).

### Tags
JavaScript, Testing, Jest

### Additional Notes / Resources Used

This example demonstrates how a mocked function may be used within a test to confirm the behavior of a higher-order function `executeCallback()`.

```js
// The function to test. It should call the callback function 3 times with the provided arguments.
function executeCallbackThrice(fn, ...args) {
  fn(...args);
  fn(...args);
  fn(...args);
}

test('mocking a callback function', () => {
  // Define the mock function with an implementation.
  const myMock = jest.fn(value => 'Hello ' + value);

  // Pass myMock to executeCallback()
  executeCallbackThrice(myMock, 'World');

  // Make sure the the mocked function was called properly.
  expect(myMock).toHaveBeenCalledTimes(3);
  expect(myMock).toHaveBeenCalledWith('World');
  expect(myMock).toHaveReturnedWith('Hello World');

  // Set the next call to myMock() to return 'foobar'
  myMock.mockReturnValueOnce('foobar');
  
  // pass myMock to executeCallback()
  executeCallbackThrice(myMock, 'Codecademy');

  expect(myMock).toHaveBeenCalledTimes(6);

  // Check each individual call's return value (indexing starts at 1)
  expect(myMock).toHaveNthReturnedWith(4, 'foobar');
  expect(myMock).toHaveNthReturnedWith(5, 'Hello Codecademy');
  expect(myMock).toHaveNthReturnedWith(6, 'Hello Codecademy');
})
```
Sources:
* https://jestjs.io/docs/jest-object#jestfnimplementation
* https://jestjs.io/docs/mock-functions
* https://jestjs.io/docs/expect

<hr>


## Mocking modules with `jest.mock()`

### Learning Standard Text

Jest provides the `jest.mock(moduleName)` method for mocking entire modules. The methods of the module being mocked may be treated as if they had each been created using `jest.fn()` and have access to all mocking methods, such as `.mockReturnValueOnce()`.

### Tags

JavaScript, Testing, Jest

### Additional Notes / Resources Used

This example was modified from the example in the [docs](https://jestjs.io/docs/mock-functions#mocking-modules)

```js
import axios from 'axios';

// To test this function without actually fetching from the API, lets mock the axios module
async function getUserData() {
  const response = await axios.get('/users?id=12345');
  return response.data;
}

jest.mock('axios');

test('should fetch users', async () => {
  // Rather than fetching real data, mock the data
  const users = [{name: 'Bob'}, {name:'June'}];
  const resp = {data: users};
  
  // then set the resolved value for our axios mock
  axios.get.mockResolvedValue(resp);

  await expect(getUserData()).resolves.toEqual(users);
});
```

Sources:
* https://jestjs.io/docs/mock-functions#mocking-modules
* https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c

<hr>
