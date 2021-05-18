//file: mineral_counter.test.js

const mineralCounter = require('./mineral_counter')
const axios = require('axios')
jest.unmock('./http')
jest.unmock('axios')

test('transform an object to an array of values', () => {
    //setup
    const input = {
        potassium : 1,
        iron: 2,
        zinc: 3
    }
    const expectedValue = [1, 2, 3]
    //exercise
    const value = mineralCounter.mineralExtractor(input)
    //verify
    expect(value).toEqual(expectedValue)
})
// test('transform entered list from string to object (Ex .2)', () => {
//     //setup
//     const input = '2 fish, 5 pizzas, 4 donuts'
//     const expectedValue = {
//         'fish': 2,
//         'pizzas': 5,
//         'donuts': 4
//     }
//     //exercise
//     const value = mineralCounter.mineralExtractor(input)
//     //verify
//     expect(value).toEqual(expectedValue)
// })
test('successfully request potassium level from database and return as promise', () => {

//     const resp1 = {
//         status: `Mock1`,
//         data: { potassium: 184.04, iron: 2.6536, zinc: 1.4338 }
//     };
//     const resp2 = {
//         status: `Mock2`,
//         data: { potassium: 164.22, iron: 1.7034, zinc: 1.3974 }
//     };
//   axios.post.mockResolvedValueOnce(resp1).mockResolvedValueOnce(resp2);
    
    //setup
    const inputFood1 = 'pizza'
    const inputFood2 = 'taco'
    const expectedValue1 = { potassium: 422.44, iron: 0.3068, zinc: 0.177 }
    const expectedValue2 = 164
    const value1 =  mineralCounter.mineralSearch(inputFood1)
    // const value2 = await mineralCounter.mineralSearch(inputFood2)
        //Jest test
            expect(value1).toEqual(expectedValue1)
            // expect(value2).toBe(expectedValue2)
    })
// test('successfully request potassium level and return as promise', async() => {
//    //setup
//   const inputFood = null
//   const result = await mineralCounter.mineralSearch(inputFood)
//        //Jest test
      
//            expect(result).toBeDefined()
          
// })


// test('create list of food potassium levels from object', async() => {
//     //setup
//     const inputList = { taco: 1, pancakes: 2, hamburgers: 3 }
//     const expectedValue = [Math.round(164.22), Math.round(2*52.8), Math.round(3*569.52)]
//     //exercise
//     const value = await mineralCounter.potassiumList(inputList)
//     //verify
//     expect(value).toEqual(expectedValue)
// })
// test('add all potassium', () => {
//     //setup
//     const inputList = [1, 2, 3]
//     const expectedValue = 6
//     //exercise
//     const value = mineralCounter.sumList(inputList)
//     //verify
//     expect(value).toBe(expectedValue)
//     expect(inputList).not.toContain(typeof 'number')
//     expect(value).toBeTruthy()
//     expect(value).toBeDefined()
// })
// test('respond to how many mg of potassium a list of food has', async () => {
//     //setup
//     const inputList = '1 taco, 2 pancakes, 3 hamburgers'
//     const expectedValue = `This list contains ${Math.round(1* 164.22) + Math.round(2*52.8) + Math.round(3*569.52)} mg of potassium!`
//     //exercise
//     const value = await mineralCounter.response(inputList)
//     //verify
//     expect(value).toBe(expectedValue)
// })