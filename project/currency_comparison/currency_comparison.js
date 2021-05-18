const http = require('./http')

class CurrencyComparison {
    constructor(salary) {
        this.salary = salary
    }
    fetchCurrentExchange = async () => {
        return await http.httpRequest().then(res=>res.rates)
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
    response = (currency, exchangeRate) => {
        if (this.hourlyPayUSD(1) > this.hourlyPayUSD(exchangeRate)) {
            return `Your pay would decrease from $${this.hourlyPayUSD(1)} to $${this.hourlyPayUSD(exchangeRate)} if you were paid ${this.salary} ${currency} instead of ${this.salary} USD`
        }
        else if (this.hourlyPayUSD(1) < this.hourlyPayUSD(exchangeRate)) {
            return `Your pay would increase from $${this.hourlyPayUSD(1)} to $${this.hourlyPayUSD(exchangeRate)} if you were paid ${this.salary} ${currency} instead of ${this.salary} USD`
        }
        else {
            return `Your pay would stay the same ${this.salary} if you were paid ${this.salary} ${currency} instead of ${this.salary} USD`
        }
    }
}

module.exports = CurrencyComparison