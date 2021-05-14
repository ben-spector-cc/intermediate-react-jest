# Testing in Jest

## Lesson Information

### Resource(s)

- [jest official documentation](https://jestjs.io/)


### Learning Standards

1. What is Jest
2. Installing Jest
3. Running Jest Test
4. The `test()` function
5. The `expect()` function and matchers
6. False Positives in Jest with Asynchronous Code
7. Testing Async Code - Async Callbacks
8. Testing Async Code - Promises
9. Mocking functions with `jest.fn()`
10. Mocking modules with `jest.mock()`


<hr>

## Exercise # 1: What is Jest

### Which course outcomes will be covered by this exercise?

1. Learners will obtain a general understanding of testing and why it is important. 
2. Learners will get brief exposure to the three main types of tests: 
    - unit tests
    - integration tests
    - end-to-end tests. 
3. Learners will understand the viability and efficiency of performing tests with jest. 


### Narrative Summary

1. In this lesson, we will explore the wonders of testing with jest and how it can expedite the project creation process. While there are many testing libraries out there, Jest provides a testing framework that focuses on simplicity, allowing us to do a lot, right out of the box without much setup.
2. Will explain testing and talk about the three different types
    - Unit tests 
    - Integration tests 
    - End-to-End tests
3. Will define jest and some of its advantages 


### What would you like to have in the workspace for this exercise? Share your plan below.

#### Workplace Theme:
- This lesson will be taught while testing out the functionalities of a single pre-developed application 
#### Required Assets:
- An infographic of unit test, integration tests, and end-to-end tests
#### Components necessary:
- I.E. text editor and output terminal


<hr>

## Exercise # 2: Setting up Jest

### Which course outcomes will be covered by this exercise?

1. Learners will be able to install Jest into a workplace and also configure jest with the ‘test’ script.


### Narrative Summary

1. Introduce the project that will be tested 
2. Outline the steps to set up the workplace and  install jest
3. Explain file labeling and structure to best use jest 
4. Write test script


### Checkpoints Summary

1. Initialize npm, creating a package.json file
2. Run the “jest  myproject.test.js” command
3. Edit package.json to include test script
4. Run ‘npm test’ command 

2. Checkpoint two

#### What is the purpose of these checkpoints?

- The learner will be able to set up a basic jest testing environment

### What would you like to have in the workspace for this exercise? Share your plan below.

- I.E. text editor and output terminal
<hr>

## Exercise # 3: The `test()` function

### Which course outcomes will be covered by this exercise?

1. Learners will be able to begin understanding the basic syntax involved with writing tests in jest (Ex. `test()` function).


### Narrative Summary

1. Introduce the test() function 
2. Explain the three test function parameters.
    - test(‘description of desired behavior’) 
    - test(‘description of desired behavior. ()=>{})
    - test(‘description of desired behavior. ()=>{}, 3000)	


### Checkpoints Summary


1. Create an empty test function in the myproject.test.js file using the syntax covered above. 
2. Describe the test 
3. Declare the function using the default timeout 


#### What is the purpose of these checkpoints?

- The learner will be able to set up a test() function 

### What would you like to have in the workspace for this exercise? Share your plan below.

- I.E. text editor and output terminal

## Exercise # 4: The `expect()` function

### Which course outcomes will be covered by this exercise?

1. Learners will be able write a basic unit test in jest using the expect() function in conjunction with five of types of matchers. 
- Five types of matchers.
    - .toBe and .toEqual
    - .toContain
    - .toBeTruthy
    - .not
    - .toBeDefined 


### Narrative Summary

1. In this lesson, we will cover the necessary basic syntax for writing our first complete unit test inside of our previously constructed test() function.
2. Explain the simplicity of using jest syntax with an example of taking a sentence to describe the desired test and translating it into jest syntax.
3. Demonstrate the different outcomes of the five selected matchers individually so, while encouraging the learner to visit documentation for the full list. 



### Checkpoints Summary


Using the previously created empty test function in the myproject.test.js file. 
1. Write simple unit tests with .toBe
2. Run test to verify
3. Write simple unit tests with .not
4. Run test to verify
5. Write simple unit tests with .toBeTruthy
6. Run test to verify
7. Write simple unit tests with .toBeDefined
8. Run test to verify
7. Write simple unit tests with .toContain
8. Run test to verify
 


#### What is the purpose of these checkpoints?

- The learner will write their first unit tests 


### What would you like to have in the workspace for this exercise? Share your plan below.

- I.E. text editor and output terminal


## Exercise # 5: Testing Async Code in jest: Part 1

### Which course outcomes will be covered by this exercise?

1. Learners will be able to understand and solve false positives in jest using `done()`


### Narrative Summary

1. Begin by analyzing an api call that because of poor jest syntax, leads to a false positive, prematurely returning a test result.
2. Explain why the test result returned as it did and how jest works with async code
3. Re-write code to function properly
Use done()


### Checkpoints Summary

Using a rest api call. 
1. Rewrite test to use done(), using above example as reference

 
#### What is the purpose of these checkpoints?

- The learner will be able to write unit tests to analyze async code using done() 


### What would you like to have in the workspace for this exercise? Share your plan below.

- I.E. text editor and output terminal


## Exercise # 6: Testing Async Code in jest: Part 2

### Which course outcomes will be covered by this exercise?

1. Learners will be able to understand and solve false positives in jest using `.resolves`, `.rejects` and async/await. 


### Narrative Summary

1. Explain that there are two other ways to solve the false positive issue by introducing and explaining `.resolves`, `.rejects` and async/await
2. Re-write code to function properly using `.resolves` and `.rejects`, explaining the structure and syntax
3.  Re-write code to function properly using async/await, explaining the structure and syntax


### Checkpoints Summary

Using a rest api call. 
1. Rewrite test to use `.resolves` and `.rejects`, using above example as reference
2. Run test to verify
3. Rewrite test to use async/await, using above example as reference
4. Run test to verify

 
#### What is the purpose of these checkpoints?

- The learner will be able to write unit tests to analyze async code using `.resolves`, `.rejects` and async/await 


### What would you like to have in the workspace for this exercise? Share your plan below.

- I.E. text editor and output terminal


## Exercise # 8: Mocking in jest: `jest.fn()`

### Which course outcomes will be covered by this exercise?

1. Learners will be able to understand testing psychology with regards to what aspects of our project are we specifically trying to testas well as mock an http request.



### Narrative Summary

1. Begin by analyzing a rest api call.
2. Explain why hitting this api every time we want to run a test can be problematic
3. Explain how mocks work in jest 
4. Offer `jest.fn()` as a solution to mock the call and explain `jest.fn()` and its syntax
5. Show example



### Checkpoints Summary

Using a rest api call. 
1. Create a mock file in the __mock__ folder 
2. Create a mock a function (will breakdown the steps further)
3. Test to make sure that everything works


 
#### What is the purpose of these checkpoints?

- The learner will be able to use mock functions to optimize their tests in jest  


### What would you like to have in the workspace for this exercise? Share your plan below.

- I.E. text editor and output terminal

## Exercise # 9: Mocking in jest: `jest.mock()`

### Which course outcomes will be covered by this exercise?

1. Learners will be able to use jest.mock() to mock a modules return values.


### Narrative Summary

Continue where previous exercise left off
1. Use jest.mock() to mock return values  
2. Explain jest.mock() and its syntax
3. Show example



### Checkpoints Summary

Using a rest api call. 

1. Create a mock a function (will breakdown the steps further)
2. Test to make sure that everything works


 
#### What is the purpose of these checkpoints?

- The learner will be able to use mock functions to optimize their tests in jest.  


### What would you like to have in the workspace for this exercise? Share your plan below.

- I.E. text editor and output terminal

## Exercise # 10: Let's Review

### Which course outcomes will be covered by this exercise?

1. Learners will be get a brief review of what was covered in the lesson.


### Narrative Summary


1. This section will be used to provide a brief review of the contents of the lesson 


### What would you like to have in the workspace for this exercise? Share your plan below.

- I.E. text editor and output terminal

