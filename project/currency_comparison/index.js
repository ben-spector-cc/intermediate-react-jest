const readline = require("readline");
const CurrencyComparison = require("./currency_comparison")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a yearly salary in USD: ", function(salary){
    if (isNaN(salary)) {
        console.log('Please try again with only enter in numeric characters.')
        rl.close()
    }  
    const curSalary = new CurrencyComparison(salary)
    rl.question("Enter a three-letter ISO currency code to compare with salary: ", async function(currency) {
        const rates = await curSalary.fetchCurrentExchange()
        if (!Object.keys(rates).includes(currency.toUpperCase())) {
            console.log("Sorry, but it doesn't seem that we have currency exchange info for that currency.")
            rl.close()
        }
            const exchangeRate = curSalary.currencyConversion(rates, currency.toUpperCase())
            console.log(curSalary.response(currency.toUpperCase(), exchangeRate))
            rl.close()
    })
});

rl.on("close", () => {
    process.exit(0)
})