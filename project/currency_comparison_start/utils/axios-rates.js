const axios = require("axios");

module.exports = {
    get: () => {
        const res = {
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
        }
        return res
    }
      
    }


