module.exports = {
    get: jest.fn(() => {
        return Promise.resolve({
            status : "Mock",
            data: {}
            })
        })
    }
