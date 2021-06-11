const CurrencyComparison = require('../currency_comparison')

const testSalary = new CurrencyComparison(50000)
    
//Place test for testSalary.currencyConversion below







//Place test for testSalary.hourlyPayUSD below
    







test("respond with different salaries based on currency", () => {
    //arrange
    const currency = "EUR"
    const exchangeRate = 1.21
    const expectedValue = {
        USD: 25,
        EUR: 30.25,
        salary: 50000,
    }
    //act
    
        testSalary.response(currency, exchangeRate, result => {
            //assertions
            
            
        })
    
        
    
})

test("Receives current currency exchange data", ()=>{
    //arrange
    const expectedValue = 200
    //act
    const actualValue = testSalary.fetchCurrentExchange() 
    //assertions
    //testing for REST API status code
})



// test("Receives current currency exchange data", async ()=>{
//     //arrange
//     const mockResponse = {
//             status : "Mock",
//            data: {
//              "base": "USD",
//              "rates": {
//                  "CCD": 50,
//              },
//                 "date": "2021-05-17"
//             }
//     }
//     
//     //act
//     const actualValue = await testSalary.fetchCurrentExchange() 
//     console.log(actualValue);
//     //assertions
//     expect(actualValue[1]).toBe("Mock") //testing for REST API status code
// })
