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
     console.log(`REST API call with status: ${result.status}`)
    
    if (result.data.foods[0].food_name) {
        const vitaminPack = {
            potassium: result.data.foods[0].nf_potassium,
            iron: result.data.foods[0].full_nutrients[20].value,
            zinc: result.data.foods[0].full_nutrients[25].value,
        }
        console.log(vitaminPack);
        return vitaminPack
    }
    
    return result

};

exports.httpRequest = httpRequest