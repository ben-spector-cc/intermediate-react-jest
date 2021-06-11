module.exports = {
        post: jest.fn(()=>{
                 return Promise.resolve({ status:'', data: {} })
        }) 
}
