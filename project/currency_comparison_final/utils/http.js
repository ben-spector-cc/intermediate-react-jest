const axios = require('./axios-rates')


const httpRequest = async () => {
    
    const rates = await axios.get('https://api.ratesapi.io/api/latest')
    return rates
}

exports.httpRequest = httpRequest