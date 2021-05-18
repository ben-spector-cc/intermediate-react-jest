const CurrencyComparison = require('../currency_comparison')
const axios = require('axios')
const { test } = require('@jest/globals')
jest.mock('axios')

const testSalary = new CurrencyComparison(50000)

describe("Outputs the number of work hours needed to obtain an inputted salary in USD, earning foreign currency", () => {
    test("Calculates number of hours per week needed to reach yearly salary goal", () => { })
    test("Converts foreign currency(Ex. CAD) to USD", async() => {
        //arrange
        const currencyCode = 'CAD'
        const expectedValue = .82
        //act
        const actualValue = await testSalary.currencyConversion(currencyCode) 
        //assertions
        expect(actualValue).toBe(expectedValue)
    })
    test("Converts foreign currency(Ex. EUR) to USD", async() => {
        //arrange
        const currencyCode = 'EUR'
        const expectedValue = 1.21
        //act
        const actualValue = await testSalary.currencyConversion(currencyCode) 
        //assertions
        expect(actualValue).toBe(expectedValue)
    })
    test("Receives current currency exchange data", async ()=>{
        //arrange
        //act
        const actualValue = await testSalary.fetchCurrentExchange() 
        //assertions
        expect(actualValue).toBeTruthy()
    })
    test("Convert foreign currency into USD equivalent hourly pay", () => {
        //arrange
        const exchangeRate = 1.21
        const expectedValue = 30.25
        //act
        const actualValue = testSalary.hourlyPayUSD(exchangeRate)
        //assertions
        expect(actualValue).toBe(expectedValue)
    })
    test("respond with different salaries based on currency", () => {
        //arrange
        c
        //act
        //assertions
    })
})