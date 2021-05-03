const axios = require("axios");
require('dotenv').config()

const httpRequest = async (food) => {
     const result =  await axios.post('https://trackapi.nutritionix.com/v2/natural/nutrients',
        {
            "query": food,
            "timezone": "US/Eastern"
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'x-app-id': process.env.NUTRITIONIX_APP_ID,
                'x-app-key': process.env.NUTRITIONIX_API_KEY,
            }
        },
     )
    if (result.status) {
        console.log(`REST API call with status: ${result.status}`)
    } 

    return result
};

exports.httpRequest = httpRequest