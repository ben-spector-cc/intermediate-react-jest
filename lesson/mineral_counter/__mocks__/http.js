//potassium_counter/__mocks__/https.js

const httpRequest = () => {
        console.log('Mock API call')
        return Promise.resolve({ nf_potassium: 184.04 })
}

exports.httpRequest = httpRequest