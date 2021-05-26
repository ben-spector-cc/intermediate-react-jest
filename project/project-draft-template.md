# _Project Name_

_Read the [content standards](http://curriculum-documentation.codecademy.com/Content-Standards/project/) for expectations for outline and check out [this example](https://docs.google.com/document/d/1SfHo68LS_w38ur7FJCxyKhBX5aOk_odY1GBYD_Y2kmE/edit)._

## Project Information

### Resource(s)

_Insert any resources you used while researching to help plan your project._

1. Resource

### Description

### Objective(s)

### Thumbnail Image URL: 

![Currency Comparison thumbnail](./assets/john-mcarthur-ROQzKIAdY78-unsplash.jpeg)

<hr>

## Introduction

You just learned how to leverage the power of Jest to create unit tests. Let’s put that knowledge to use! For this project, you’ll be testing a node.js application called **Currency Comparison**. Let’s get started!

## Task Group #1: _Installing and Configuring Jest_

### Task #1

* Before we get started take a moment to familiarize yourself with the Currency Comparison application. The application can be run by running the command `npm start` in the terminal. Try using a yearly salary of 50000 USD and try converting it into Canadian Dollar (CAD). 


### Hint

* Run ```npm start``` in the terminal, then respond with `50000` for the first prompt and `CAD` for the second.

<hr>

### Task #2

* Now that we have taken the time to explore the ins and outs of the Currency Comparison app, let’s begin testing it in Jest. We will begin by Initializing npm and installing Jest!


### Hint

*Run ```npm init -y``` in the terminal. Once the package.json file has been created, run ```npm install jest --save-dev``` in the terminal.

<hr>

### Task #3

* Ok so we just downloaded Jest, now it’s time to configure it to run with the command ```npm test```, outputting a coverage report each time.


### Hint

* Edit the `test` script in the package.json file to read: 
```js
”test”:”jest --coverage”
```

<hr>

### Task #4
* Let’s make sure that everything has been set up correctly by running the test command in the terminal. We should see passing tests as well as a coverage report from the provided test file (currency_comparison.test.js).
### Hint
* Run `npm test` in the terminal 

<hr>

## Task Group #2: Writing basic unit tests

### Task #5

* Now that we have everything set up, let’s take a look at the **currency_comparison.test.js** file provided in the **\_\_tests\_\_** directory. Complete the first test by adding assertions to  “Convert a foreign currency to USD”. Remember, in Jest we write assertions with the combination of the `expect()` function and matchers (e.g. `.toBe()`).Once you have added the assertions, don’t forget to run the test command in the terminal to make sure that the test pass!


### Hint

* Your assertions should look something like this: 
```js
expect(actualValue1).toBe(expectedValue1)
expect(actualValue2).toBe(expectedValue2)
```

<hr>

### Task #6

* Let’s continue by now writing assertions to make sure that  `hourlyPayUSD()`, can “Convert a foreign currency into USD equivalent hourly pay”.
Hint

### Hint

* Your assertions should look something like this: 
```js
expect(actualValue1).toBe(expectedValue)
```
<hr>

## Task Group #3: Unit tests with Callbacks and Promises

### Task #7
The Currency Companion app has a `response()` function that returns data within a callback. Remember that when we have functions that return a callback, we need to use a special syntax in order to avoid false positives in our tests. Add assertions to the test that verify that `response()` will, “respond with different salaries based on currency”. Make sure to include the `done()` parameter to avoid the false positive problem as well. 
### Hint
* Passing done as an argument, your solution code should look something like this: 
```js
try {
        testSalary.response(currency, exchangeRate, result => {
            //assertions
            expect(result).toEqual(expectedValue)
            done()
        })
    } catch (error) {
        done(error)
    }
```
<hr>

### Task #8

Now that our test is fixed, run the test command in the terminal to see the passing test!

### Hint

* Run `npm test` in the terminal

<hr>
### Task #9

* The Currency Comparison app contains `fetchCurrentExchange()`, this function is asynchronous and returns an array with two items, the data object and the REST API status code.  This function will also force us to alter our basic unit test syntax. This time however we will be looking to avoid a ‘“false negative” instead of a “false positive”.  Add assertions to the test to verify that `fetchCurrentExchange()` properly "Receives current currency exchange data". We will verify this by expecting `actualValue[1]`-the status from the REST API call- to be 200, meaning that everything went smoothly. Run the test command in the terminal once you finish to make sure that the test passes.

### Hint

* Remember that the test() callback function should begin with the indicator `async`. The `await` indicator should come before any function that needs to return before moving on down the call stack.


<hr>

## Task Group #4:Mocking 
### Task #10
* Congratulations, you have written a test for each of the functions in “Currency Comparison”. However, we do have one last thing to do to make sure that we are also following “good testing practices”. The `fetchCurrentExchange()`is a function that makes a call to a REST API. It is not good practice to make real REST API calls in testing, therefore we should actually be mocking this call. Lets begin by creating a **\_\_mocks\_\_** directory and placing an empty file within it that will mock axios. 
### Hint
* Create a directory at the root level named **\_\_mocks\_\_**. Within that directory, create a file named **axios.js**.


<hr>

### Task #11

* Now lets populate the newly created file with an exported function that mocks the `axios.get()` method, returning a resolved Promise of, { status : "",data: {} }.


### Hint

* Your **\_\_mocks\_\_/axios.js** file should look something like this: 
```js
module.exports = {
    get: jest.fn(() => {
        return Promise.resolve({
            status : "",
           data: {}
           })
        })
    }
```

<hr>
### Task #12

* With the mock function created it is now time to notify Jest that we will be using the mock call instead of the real REST API call. At the top of **currency_comparison.test.js** import axios and right under that import, tell jest to mock axios. Comment out the entire previous test that verified that `fetchCurrentExchange()` returned a status code of 200 and comment in the test below it.
With the mock function created it is now time to notify Jest that we will be using the mock call instead of the real REST API call. At the top of **currency_comparison.test.js** import axios and right under that import, tell jest to mock axios. Comment out the entire previous test that verified that `fetchCurrentExchange()` returned a status code of 200 and comment in the test below it.


### Hint

The top of the **currency_comparison.test.js** file should contain at least the following two commands:

```js
const axios = require('axios')
jest.mock('axios')
```


<hr>

## Task #13
* Notice that in the newly un-commented test we are using `jest.fn().mockResolvedValueOnce(response)`. This allows us to determine what will be returned from our mock axios.get() function. To verify that everything is working smoothly, the test assertion now is looking for the status code of “Mock”. Run the test command in the terminal to make sure that everything passes. 
### Hint
* Run `npm test` in the terminal

<hr>

### Conclusion
* We have come to the end of this project testing all of the functionalities of the “Currency Comparison” application and we have even added a mock axios module. That’s all for now but we here at Codecademy wish you happy testing as you continue your relationship with Jest.

<hr>