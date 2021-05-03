# Project: Calorie Counter

## Steps:

1. Setup workspace
    ```bash
    npm init -y
    ```
    ```bash
    npm install jest --save-dev
    ```
    ```javascript
    "scripts":{
        "test" : "jest"
    }
    ```

2. Create list of tests for project
    ```javascript
    const calorieCounter = require('./calorie_counter')

    test.todo('transform entered list from string to array')
    test.todo('successfully request food calories')
    test.todo('create list of food calories')
    test.todo('add all calories')
    test.todo('return humanized response')
    ```

3. Write first test
```javascript
    test.('transform entered list from string to object', () => {
    //setup
    const input = '1 taco, 2 pancakes, 3 hamburgers'
    const expectedValue = {
        'taco': 1,
        'pancakes': 2,
        'hamburger': 3
    }
    //exercise
    const value = calorieCounter.itemExtractor(input)
    //verify
    expect(value).toEqual(expectedValue)
})
```

4.