var helpers = require('./helpers.js');

functions = {
    isSafeNumber: (num) => {
        return helpers.isSafeNumber(num)
    },
    toWords: (val, type) => {
        if (!helpers.isValidNumeralSystem(type))
            throw new Error('Use valid numeral type at parameter 2: IN|INTL');

        val = helpers.removeCommas(val)

        if (!helpers.isSafeNumber(val)) {
            throw new Error('Used numerical value exceeds floating point precision')
        }
        if (type === "intl" || type === "INTL")
            return helpers.generateWordsINTL(val)
        else if (type === "in" || type === "IN")
            return helpers.generateWordsIN(val)
    },
    delCommas: (val) => {
        return val.replace(/\,/g, '');
    }

}


