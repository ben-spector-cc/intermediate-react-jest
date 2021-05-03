const potassiumCounter = require('./potassium_counter')

potassiumCounter.response('1 salad, 3 bananas, 4 cookies').then(res=> console.log(res))