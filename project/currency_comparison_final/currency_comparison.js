const http = require('./utils/http')

class CurrencyComparison {
    constructor(salary) {
        this.salary = salary
    }
    fetchCurrentExchange = async () => {
        return await http.httpRequest().then(res => {
            return [res.data.rates, res.status]
        })
    }
    currencyConversion = (rates, currency) => {
    
        if (currency === 'EUR') {
            return +(rates.USD).toFixed(2)
        }
        const eurToUsd = 1 / rates.USD
        return +(1/rates[`${currency}`]/eurToUsd).toFixed(2)
    }
    hourlyPayUSD = (exchangeRate) => {
        const usdSalaryEqual = exchangeRate * this.salary
        const weeklySalary = usdSalaryEqual / 50 //assuming 50 work weeks a year
        return weeklySalary / 40 //assuming 40 hour work weeks
    }
    response = (currency, exchangeRate, fn) => {
        const hourlyPayComparison = {
            salary: this.salary,
            USD: this.hourlyPayUSD(1)
        }
        hourlyPayComparison[`${currency}`] = this.hourlyPayUSD(exchangeRate)
        return fn(hourlyPayComparison, currency)
    }
}

module.exports = CurrencyComparison