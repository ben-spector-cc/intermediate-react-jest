## Quiz: Jest

**Assessment 1** (Multiple Choice Template)

Question prompt:

	 What two crucial testing components does Jest provides us with right out of the box?

Response: Assertion Library and test runner: Affirmation. Optional reason why this response is correct.

Response: Assertion Library and node package manager: Not quite. A **N**ode **P**ackage **M**anager must first be present to then install the jest package.

Response: Node package manager and a test runner: Not quite. A **N**ode **P**ackage **M**anager must first be present to then install the jest package.

Response: Assertion Library: Not quite. We only have half of the jest components with this answer.

**Assessment 2** (Multiple Choice Template)

Question prompt:

	Which of the following terminal commands will properly install the jest package?

Response:`npm install jest --save-dev`: Affirmation. Optional reason why this response is correct.

Response: `npm install jest --save`: Not quite. The `--save` flag will save the jest package as a production dependency rather than a development dependency.

Response: `npm install jest` : Not quite. Without the `--save-dev` flag, npm will save the jest package as a production dependency rather than a development dependency

Response: `install jest --save-dev` Reason: Not quite. We need to specify that we are installing jest with the **N**ode **P**ackage **M**anager.

**Assessment 3** (Multiple Choice Template)

Question prompt:

	When configuring the test script in the package.json file, what jest testing flag can be added to provide a coverage report each time that the test is run?

Response:`--coverage`: Affirmation. Optional reason why this response is correct.

Response: `--clearCache`: Not quite. This flag deletes the Jest cache directory and then exits without running tests.

Response: `--debug`: Not quite. This flag prints debugging info about your Jest configuration.

Response: `--watch`: Not quite. This flag watches files for changes and reruns tests related to the changed files.

**Assessment 4** (Multiple Choice Template)

Question prompt:

	Jest provides us with a `test()` function that receives three arguments. Which testing block is properly set up?

Response:`test(“description”, ()=>{}, 3000)`: Affirmation. Optional reason why this response is correct.

Response: `test(“description”, ()=>{}, “3000”)`: Not quite. The timeout here has been represented as a string instead of as a number.

Response: `test(“description”, 3000, ()=>{})`: Not quite. This test block has all of the right arguments but they are in the wrong order with the callback function and the timeout in swapped positions.

Response: `test( ()=>{}, 3000, “description”)`: Not quite. This test block has all of the right arguments but they are in the wrong order.

**Assessment 5** (Fill in the Code Template)

Fill in The Code question prompt

We want to test `sumNums()` to verify that it can properly sum two numbers. Within the test block, fill in the blanks to complete the test assertions.

Code to be filled

`test(“sumNums() can sum two numbers”, ()=>{

	//arrange

	const num1 = 2

	const num2 = 3

	const expectedValue = 5

	//act

	Const actualValue = sumNums(num1, num2)

	//assert

	[1][2][3][4]

})`

Response[1]: `expect` Hint: A hint pointing learners in the right direction for this blank.

Response[2]: `(actualValue)` Hint: A hint pointing learners in the right direction for this blank.

Response[3]: `.toBe` Hint: A hint pointing learners in the right direction for this blank.

Response[4]: `(expectedValue)` Hint: A hint pointing learners in the right direction for this blank.

Extras: Extra option 1, Extra option 2...

**Assessment 6** (Multiple Choice Template)

Question prompt:

	Which matcher can be used to verify deep equality?

Response:`.toEqual`: Affirmation. Optional reason why this response is correct.

Response: `.toBe`: Not quite. This matcher is similar to `.toEqual()` but can not perform deep equality.

Response:`toBeTruthy()`: Not quite. This matcher is used to verify that a value is not “falsy”.

Response: `.toContain()` : Not quite. This matcher is used to verify the existence of items within an array.

**Assessment 7** (Fill in the Code Template)

Fill in The Code question prompt

We want to test `restApiCall()` to verify that it can properly return data with a callback. Within the test block, fill in the blanks to complete the test so that it will run without a false positive.

Code to be filled

`test(“restApiCall() returns data in callback”, ([1])=>{

	//arrange

	const num1 = 2

	const num2 = 3

	const expectedValue = ‘data’

	//act

	const actualValue = restApiCall(res=>{


    	//assert


    [2]{


    expect(res).tobe(‘data’)


    [3]


    }[4]{


    [5]


    }


    })

	

	

})`

Response[1]: `done` Hint: A hint pointing learners in the right direction for this blank.

Response[2]: `try` Hint: A hint pointing learners in the right direction for this blank.

Response[3]: `done()` Hint: A hint pointing learners in the right direction for this blank.

Response[4]: `catch(error)` Hint: A hint pointing learners in the right direction for this blank.

Response[5]: `done(error)` Hint: A hint pointing learners in the right direction for this blank.

Extras: Extra option 1, Extra option 2...

**Assessment 8** (Fill in the Code Template)

Fill in The Code question prompt

We want to test `restApiCall()` to verify that it can properly return data as a Promise. Within the test block, fill in the blanks to complete the test so that it will run without a false negative.

Code to be filled

`test(“restApiCall() returns data as Promise”, [1]()=>{

	//arrange

	const num1 = 2

	const num2 = 3

	const expectedValue = ‘data’

	//act

	const actualValue = [2] restApiCall()

	//assert

expect(res).tobe(‘data’)

})`

Response[1]: `async` Hint: A hint pointing learners in the right direction for this blank.

Response[2]: `await` Hint: A hint pointing learners in the right direction for this blank.

Extras: Extra option 1, Extra option 2...

**Assessment 9** (Multiple Choice Template)

Question prompt:

	What function is provided by jest to create mock functions?

Response:`jest.fn()`: Affirmation. Optional reason why this response is correct.

Response: `fn.jest()`: Not quite. The syntax here is wrong as `fn` is not a jest function.

Response: `mock.jest()`: Not quite. The syntax here is wrong as jest does not have a `mock` object with a `jest()` function.

Response:`mock.fn()`: Not quite. The syntax here is wrong as jest does not have a `mock` object with an `fn` function.

**Assessment 10** (Multiple Choice Template)

Question prompt:

	If we have a file, `__mocks__/axios.js`, what function would we use inside of our test file to notify jest that the axios module should be mocked?

Response:`jest.mock(axios)`: Affirmation. Optional reason why this response is correct.

Response: `axios.mock(jest)`: Not quite. `axios` is not a jest object, therefore jest wouldn’t know what to do with this call.

Response: `mock.jest(axios)` : Not quite. Jest does not have a `mock` object with a `jest()` function.

Response: `mock(axios)`: Not quite. This syntax is missing the call to the `jest` object.

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
