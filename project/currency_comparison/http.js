const axios = require('axios')

const httpRequest = async () => {
    const rates = await axios.get('https://api.ratesapi.io/api/latest')
    rates.status && console.log(`REST API status: ${rates.status}`)
    return rates.data
}

exports.httpRequest = httpRequest