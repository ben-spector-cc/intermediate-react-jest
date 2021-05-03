//file: potassium_counter.test.js

const potassiumCounter = require('./potassium_counter')
const axios = require('axios')
jest.unmock('./http')
jest.unmock('axios')
// test('transform entered list from string to object (Ex .1)', () => {
//     //setup
//     const input = '1 taco, 2 pancakes, 3 hamburgers'
//     const expectedValue = {
//         'taco': 1,
//         'pancakes': 2,
//         'hamburgers': 3
//     }
//     //exercise
//     const value = potassiumCounter.itemExtractor(input)
//     //verify
//     expect(value).toEqual(expectedValue)
// })
// test('transform entered list from string to object (Ex .2)', () => {
//     //setup
//     const input = '2 fish, 5 pizzas, 4 donuts'
//     const expectedValue = {
//         'fish': 2,
//         'pizzas': 5,
//         'donuts': 4
//     }
//     //exercise
//     const value = potassiumCounter.itemExtractor(input)
//     //verify
//     expect(value).toEqual(expectedValue)
// })
// test('successfully request potassium level from database and return as promise', async() => {

//     const resp1 = {
//         status: `Mock1`,
//         data: { foods: [{ nf_potassium: 184.04 }] }
//     };
//     const resp2 = {
//         status: `Mock2`,
//         data: { foods: [{ nf_potassium: 164.22 }] }
//     };
//   axios.post.mockResolvedValueOnce(resp1).mockResolvedValueOnce(resp2);
    
//     //setup
//     const inputFood1 = 'pizza'
//     const inputFood2 = 'taco'
//     const expectedValue1 = 184
//     const expectedValue2 = 164
//     const value1 = await potassiumCounter.potassiumSearch(inputFood1)
//     const value2 = await potassiumCounter.potassiumSearch(inputFood2)
//         //Jest test
//             expect(value1).toBe(expectedValue1)
//             expect(value2).toBe(expectedValue2)
//     })
test('successfully request potassium level and return as promise', async() => {
   //setup
  const inputFood = null
  const result = await potassiumCounter.potassiumSearch(inputFood)
       //Jest test
      
           expect(result).toBeDefined()
          
})


// test('create list of food potassium levels from object', async() => {
//     //setup
//     const inputList = { taco: 1, pancakes: 2, hamburgers: 3 }
//     const expectedValue = [Math.round(164.22), Math.round(2*52.8), Math.round(3*569.52)]
//     //exercise
//     const value = await potassiumCounter.potassiumList(inputList)
//     //verify
//     expect(value).toEqual(expectedValue)
// })
// test('add all potassium', () => {
//     //setup
//     const inputList = [1, 2, 3]
//     const expectedValue = 6
//     //exercise
//     const value = potassiumCounter.sumList(inputList)
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
//     const value = await potassiumCounter.response(inputList)
//     //verify
//     expect(value).toBe(expectedValue)
// })