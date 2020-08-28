var constants = require('./constants.js');

module.exports = {
    isSafeNumber: (num) => {
        return (constants.MAX_SAFE_INTEGER >= num && constants.MIN_SAFE_INTEGER <= num) ? true : false;
    },
    isValidNumeralSystem: (str) => {
        switch (str) {
            case "IN":
            case "INTL":
            case "in":
            case "intl":
                return true;
            default: return false;
        }
    },
    removeCommas: (val) => {
        val = val.toString().replace(/\,/g, ''); // 11,46,57,754 => 114657754
        return (parseInt(val, 10));
    }

}