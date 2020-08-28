var helpers = require('./helpers.js');
const { removeCommas } = require('./helpers.js');


functions = {
    isSafeNumber: (num) => {
        return helpers.isSafeNumber(num)
    },
    // remove this 
    isValidNumeralSystem: (str) => {
        return helpers.isValidNumeralSystem(str)
    },
    toWords: (val, type) => {
        if (!helpers.isValidNumeralSystem(type))
            throw new Error('Use valid numeral type at parameter 2: IN|INTL');

        val = removeCommas(val)
        console.log(typeof (val))

        if (!helpers.isSafeNumber(val)) {
            throw new Error('Used numerical value exceeds floating point precision')
        }
    }

}

// console.log(functions.isSafeNumber('9740992'))
// console.log(functions.isValidNumeralSystem("intl"))
console.log(functions.toWords('78,9777,8889999944', 'in'))