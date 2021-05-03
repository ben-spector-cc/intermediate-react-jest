const http = require('./http')

const potassiumCounter = {

    itemExtractor : (listString) => {
    const listObject = {};
    listString.split(', ').forEach((cur, i) => {
        if (cur !== undefined) {
            return listObject[`${cur.slice(2)}`] = +cur.charAt(0);   
        }
    })
        return listObject
        
    },
    potassiumSearch: async (food, fn) => {
        try {
            const res = await http.httpRequest(food)
            const potassium = Math.round(res.data.foods[0].nf_potassium)
            return potassium
        } catch (err) {
            return undefined
        }
    },

    potassiumList: async (listObject) => {
        return await Promise.all(Object.keys(listObject).map(async (food) => {
            const potassiumMg = await potassiumCounter.potassiumSearch(food);
            return Math.round(listObject[food] * potassiumMg);
        }))
    },

    sumList: (list) => {
        return list.reduce((total, cur)=>total+cur)
    },

    response: async (listString) => {
        const {itemExtractor, potassiumList, sumList} = potassiumCounter
        const itemObject = itemExtractor(listString)
        const potassiumArray = await potassiumList(itemObject)
        return `This list contains ${sumList(potassiumArray)} mg of potassium!`
    }
}

module.exports = potassiumCounter