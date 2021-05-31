const axios = require("axios");

module.exports = {
    get: () => {
        const res = new Promise((resolve, reject) => {
            setTimeout(() => {
             resolve({
            status: 200,
            data: {
                "base": "EUR",
                "rates": {
                    "MXN": 24.1677,
                    "CAD": 1.472,
                    "USD": 1.2143
                },
                "date": new Date().toISOString()
            }
        })
         }, 3000) 
        })
        return res
    }
      
    }


