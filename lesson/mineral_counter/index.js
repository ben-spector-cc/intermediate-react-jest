const readline = require("readline");
const mineralCounter = require("./mineral_counter.js")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Type a food to see a short list of it's minerals: ", async function (food) {
    try {
        const mineralPack = await mineralCounter.mineralSearch(food)
        const mineralLevelsArray = await mineralCounter.mineralExtractor(mineralPack)
        const response = mineralCounter.response(food, mineralLevelsArray)
            console.log(response);
    } catch (error) {
        console.log(`We could not find ${food}, please check your spelling and try again!`)
    }
    process.exit(0);
   
});


