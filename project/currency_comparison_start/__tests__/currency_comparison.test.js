const CurrencyComparison = require('../currency_comparison')

const testSalary = new CurrencyComparison(50000)
    
test("Converts foreign currency to USD", () => {
    //arrange
    const currencyCode1 = 'CAD'
    const expectedValue1 = .82
    const currencyCode2 = 'EUR'
    const expectedValue2 = 1.21
    const rates = {
            "MXN": 24.1677,
            "CAD": 1.472,
            "USD": 1.2143
            }
    //act
    const actualValue1 = testSalary.currencyConversion(rates, currencyCode1) 
    const actualValue2 = testSalary.currencyConversion(rates, currencyCode2) 
    //assertions
    
    
})

test("Convert foreign currency into USD equivalent hourly pay", () => {
    //arrange
    const exchangeRate = 1.21
    const expectedValue = 30.25
    //act
    const actualValue = testSalary.hourlyPayUSD(exchangeRate)
    //assertions
    
})
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
    //act
    const actualValue = testSalary.fetchCurrentExchange() 
    //assertions
    //testing for REST API status code
})

// test("Receives current currency exchange data", async ()=>{
//     //arrange
//     const response = {
//             status : "Mock",
//             data: {
//                 "base": "EUR",
//                 "rates": {
//                 "MXN": 24.1677,
//                 "CAD": 1.472,
//                 "USD": 1.2143
//                 },
//                 "date": "2021-05-17"
//             }
//     }
//     axios.get.mockResolvedValueOnce(response)
//     //act
//     const actualValue = await testSalary.fetchCurrentExchange() 
//     console.log(actualValue);
//     //assertions
//     expect(actualValue[1]).toBe("Mock") //testing for REST API status code
// })
