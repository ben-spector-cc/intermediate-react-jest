module.exports = {
    get: jest.fn(() => {
        return Promise.resolve({
            status : "Mock",
            data: {
                "base": "EUR",
                "rates": {
                "MXN": 24.1677,
                "CAD": 1.472,
                "USD": 1.2143
                },
                "date": "2021-05-17"
            }
            })
        })
    }
