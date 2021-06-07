## Quiz: Jest

**Assessment 1** (Multiple Choice Template)

Question prompt:

_What two crucial testing components does Jest provide right out of the box?_

Response: An assertion library and a test runner: "Correct! The assertion library is the set of functions for making assertions, like `expect().toBe()`. The test runner is the command-line tool for executing Jest test files.

Response: An assertion library and the Node Package Manager: Not quite. Jest does provide an assertion library, but the **N**ode **P**ackage **M**anager (NPM) must first be present to then install the `jest` package.

Response: The Node Package Manager and a test runner: Not quite. Jest does provide a test runner but the **N**ode **P**ackage **M**anager (NPM) must first be present to then install the `jest` package.

Response: Jest only provides an assertion library: Not quite. Jest provides an assertion library and a test runner.

**Assessment 2** (Multiple Choice Template)

Question prompt:

_Which of the following terminal commands will properly install the `jest` package as a developer dependency?_

Response:`npm install jest --save-dev`: Affirmation. Correct! The `--save-dev` flag indicates that the `jest` library should be installed as a developer dependency.

Response: `npm install jest --save`: Not quite. The `--save` flag will save the `jest` package as a production dependency rather than a development dependency.

Response: `npm install jest` : Not quite. Without the `--save-dev` flag, npm will save the `jest` package as a production dependency rather than a development dependency

Response: `install jest --save-dev` Reason: Not quite. We need to use the `npm` command to specify that we are installing `jest` with the **N**ode **P**ackage **M**anager.

**Assessment 3** (Multiple Choice Template)

Question prompt:

_When configuring the test script in the package.json file, what `jest` testing flag can be added to provide a coverage report each time that the test is run?_

Response:`--coverage`: Correct! 

Response: `--clearCache`: Not quite. This flag deletes the Jest cache directory and then exits without running tests.

Response: `--debug`: Not quite. This flag prints debugging info about your Jest configuration.

Response: `--watch`: Not quite. This flag watches files for changes and reruns tests related to the changed files.

**Assessment 4** (Multiple Choice Template)

Question prompt:

_Jest provides us with a `test()` function that receives three arguments. Which testing block is properly set up?_

Response:

```js 

test(‘description’, ()=>{}, 3000)

 ```

 Correct!  The `test()` function receives a string describing the test, a callback function to hold the assertion logic and a timeout out value, which is optional.

Response: 
```js

test('description', 3000);

```

Reason: Not quite. The second argument should be a callback function and is required. The timeout value is optional however.

Response: 

```js

test(‘description’, 3000, ()=>{})

``` 

Not quite. This test block has all of the right arguments but they are in the wrong order with the callback function and the timeout in swapped positions.

Response:

 ```js

test(()=>{}, 3000, ‘description’)

``` 

Not quite. This test block has all of the right arguments but they are in the wrong order. The correct order is a description, a callback, and then a timeout value.

**Assessment 5** (Fill in the Code Template)

Fill in The Code question prompt

_We want to test `sumNums()` to verify that it can properly sum two numbers. Within the test block, fill in the blanks to complete the test assertions._

Code to be filled

```js

test('sumNums() can sum two numbers', () => {

	//arrange

	const num1 = 2;

	const num2 = 3;

	const expectedValue = 5;

	//act

	const actualValue = sumNums(num1, num2)

	//assert

	__~expect~____~(actualValue)~____~.toBe~____~(expectedValue);~__

})

```

Response[1]: `expect` Hint: This is typically used along with a "matcher" function to assert something about a value.

Response[2]: `(actualValue)` Hint: "This is typically the value returned by the function you want to test."

Response[3]: `.toBe` Hint: This matcher is typically used to test equality

Response[4]: `(expectedValue)` Hint: "This is typically the value that we expect to be returned by the function that we want to test."

Extras: `.toBeDefined`, `assert`

**Assessment 6** (Multiple Choice Template)

Question prompt:

_Which of the following matcher methods can be used to verify deep equality of two objects?_

Response:`.toEqual`: Correct.

Response: `.toBe`: Not quite. This matcher is similar to `.toEqual()` but can not perform deep equality. Instead, use `.toBe()` when comparing primitive values.

Response:`toBeTruthy()`: Not quite. This matcher is used to verify that a value is not “falsey”.

Response: `.toContain()` : Not quite. This matcher is used to verify the existence of items within an array.

**Assessment 7** (Fill in the Code Template)

Fill in The Code question prompt

_We want to test `restApiCall()` to verify that it can properly return the string `'data'` with a callback. Within the test block, fill in the blanks to complete the test so that it will run without a false positive._

Code to be filled

```js

test(“restApiCall() returns data in callback”, (__~done~__)=>{

 //arrange

 

 const expectedValue = ‘data’

  //act

 

  const actualValue = restApiCall(response => { \
    // assert

    try { \
      __~expect(response).toBe(expectedValue);~__ \
      __~done()~__ \
    } catch (error) { \
      __~done(error)~__ \
    } \
  });

});

```

Response[1]: `done` Hint: This is typically passed as an argument to help prevent the false-positive problem in Jest.

Response[2]: `expect(response).toBe(expectedValue)` Hint: This is a typical jest assertion 

Response[3]: `done()` Hint: This notifies Jest that it can complete the test.

Response[4]: `done(error)` Hint: This notifies Jest that it can complete the test with an error.

Extras: Extra option 1, Extra option 2...

**Assessment 8** (Fill in the Code Template)

Fill in The Code question prompt

_We want to test `restApiCall()` to verify that it can properly return the string `'data'` as a Promise. Within the test block, fill in the blanks to complete the test so that it will run without a false negative._

Code to be filled

```js

test(“restApiCall() returns data as Promise”, __~async~__()=>{

  //arrange

  

  const expectedValue = ‘data’;

  

  //act

  const actualValue = __~await restApiCall()~__ 

  //assert

  expect(actualValue).tobe(expectedValue);

});

```

Response[1]: `async` Hint: This allows us to declare a function as asynchronous.

Response[2]: `await restApiCall()` Hint: This allows us to declare that `restApiCall()` should return before the code continues down the call-stack. 

Extras: `await`, Extra option 2...

**Assessment 9** (Multiple Choice Template)

Question prompt:

_What function is provided by Jest to create mock functions?_

Response:`jest.fn()`: Correct! 

Response: `fn.jest()`: Close!. The syntax here is backwards. The correct syntax is `jest.fn()`.

Response: `mock.jest()`: Not quite. The correct syntax is `jest.fn()`

Response:`mock.fn()`: Not quite. The correct syntax is `jest.fn()`

**Assessment 10** (Multiple Choice Template)

Question prompt:

_If we have a file, `__mocks__/axios.js`, what function would we use inside of our test file to notify jest that the `axios` module should be mocked?_

Response:`jest.mock('axios')`: Correct!

Response: `axios.mock('jest')`: Not quite. The `mock` method is a part of the `jest` object.

Response: `mock.jest('axios')` : Close!. The syntax here is backwards. The correct syntax is `jest.mock('axios')`. 

Response: `mock('axios')`: Not quite. The `.mock()` method is part of  the `jest` object.

Learning Standards:

1. [What is Jest](https://author.codecademy.com/learning-standards/60abeee9d0df45000ec36ded/)

2. [Installing Jest](https://author.codecademy.com/learning-standards/60abf02dd0df450011c36e48/)

3. [Configuring Jest Tests](https://author.codecademy.com/learning-standards/60abf1dfd0df450016c36ded/)

4. [The test() function](https://author.codecademy.com/learning-standards/60abf42ed5606500164a70ac/)

5. [the expect() function](https://author.codecademy.com/learning-standards/60abf478fbf75a0010e834db/)

6. [False-Positives in async tests](https://author.codecademy.com/learning-standards/60abf4a881a921000d89132f/)

7. [Testing async callbacks with done parameter](https://author.codecademy.com/learning-standards/60abf4e0874add000eb4bac0/)

8. [Testing async functions that return promises](https://author.codecademy.com/learning-standards/60abf529d5606500144a70ab/)

9. [Mocking functions with jest.fn](https://author.codecademy.com/learning-standards/60abf55ad0ef8d0016acc7c1/)

10. [Mocking modules with jest.mock()](https://author.codecademy.com/learning-standards/60abf597874add0016b4baa5/)
