const http = require('./http')

const mineralCounter = {

    mineralSearch: async (food, fn) => {
        try {
            return await http.httpRequest(food)
        } catch (err) {
            console.log(err)
            return undefined
        }
    },
    mineralExtractor : (mineralObject) => {
    const mineralArray = [];
        for (const mineral in mineralObject) {
        mineralArray.push(mineralObject[mineral])
        }
        return mineralArray
    },
    response: async (food, mineralLevelsArray) => {
        return await `${food} contains ${mineralLevelsArray[0]} mg of potassium, ${mineralLevelsArray[1]} mg of iron, and ${mineralLevelsArray[2]} mg of zinc!`
    }
}

module.exports = mineralCounter