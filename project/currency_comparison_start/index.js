const readline = require("readline");
const CurrencyComparison = require("./currency_comparison")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const responseText = (hourlyPay, currency) => {
    if (hourlyPay.USD > hourlyPay[`${currency}`]) {
            console.log(`Your pay would decrease from $${hourlyPay.USD} to $${hourlyPay[`${currency}`]} if you were paid ${hourlyPay.salary} ${currency} instead of ${hourlyPay.salary} USD`) 
        }
        else if (hourlyPay.USD < hourlyPay[`${currency}`]) {
            console.log(`Your pay would increase from $${hourlyPay.USD} to $${hourlyPay[`${currency}`]} if you were paid ${hourlyPay.salary} ${currency} instead of ${hourlyPay.salary} USD`) 
        }
        else {
            console.log(`Your pay would stay the same ${hourlyPay.salary} if you were paid ${hourlyPay.salary} ${currency} instead of ${hourlyPay.salary} USD`) 
        }
}

rl.question("Enter a yearly salary in USD: ", function(salary){
    if (isNaN(salary)) {
        console.log('Please try again with only enter in numeric characters.')
        rl.close()
    }  
    const curSalary = new CurrencyComparison(salary)
    rl.question("Enter a three-letter ISO currency code to compare with salary: ", async function(currency) {
        const cur = currency.toUpperCase()
        try {
            const rates = await curSalary.fetchCurrentExchange()
            if (!Object.keys(rates[0]).includes(cur) && cur !== 'EUR') {
                console.log("Sorry, but it doesn't seem that we have currency exchange info for that currency.")
                rl.close()
            }
            const exchangeRate = curSalary.currencyConversion(rates[0], cur)
            curSalary.response(cur, exchangeRate, responseText)
                rl.close()
        } catch (error) {
            console.log(error);
            rl.close()
        }
    })
});

rl.on("close", () => {
    process.exit(0)
})