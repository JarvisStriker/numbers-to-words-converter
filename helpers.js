var { MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, TEN, ONE_HUNDRED, ONE_THOUSAND, ONE_MILLION,
    ONE_BILLION, ONE_TRILLION, ONE_QUADRILLION, MAX, ONE_LAKH, ONE_CRORE, ONE_HUNDRED_CRORES,
    ONE_THOUSAND_CRORES, ONE_LAKH_CRORES, ONE_CRORE_CRORES,
    LESS_THAN_TWENTY, TENTHS_LESS_THAN_HUNDRED } = require('./constants.js');
var crore_fix = "";

module.exports = {
    isSafeNumber(num) {
        return (MAX_SAFE_INTEGER >= num && MIN_SAFE_INTEGER <= num) ? true : false;
    },
    isValidNumeralSystem(str) {
        switch (str) {
            case "IN":
            case "INTL":
            case "in":
            case "intl":
                return true;
            default: return false;
        }
    },
    removeCommas(val) {
        val = val.toString().replace(/\,/g, ''); // 11,46,57,754 => 114657754
        return (parseInt(val, 10));
    },
    generateWordsINTL(number) {
        var remainder, word,
            words = arguments[1];

        if (number === 0) {
            return !words ? 'zero' : words.join(' ').replace(/,$/, '');
        }

        if (!words) {
            words = [];
        }

        if (number < 0) {
            words.push('minus');
            number = Math.abs(number);
        }

        if (number < 20) {
            remainder = 0;
            word = LESS_THAN_TWENTY[number];

        } else if (number < ONE_HUNDRED) {
            remainder = number % TEN;
            word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
            // In case of remainder, we need to handle it here to be able to add the “-”
            if (remainder) {
                word += '-' + LESS_THAN_TWENTY[remainder];
                remainder = 0;
            }

        } else if (number < ONE_THOUSAND) {
            remainder = number % ONE_HUNDRED;
            word = this.generateWordsINTL(Math.floor(number / ONE_HUNDRED)) + ' hundred';

        } else if (number < ONE_MILLION) {
            remainder = number % ONE_THOUSAND;
            word = this.generateWordsINTL(Math.floor(number / ONE_THOUSAND)) + ' thousand,';

        } else if (number < ONE_BILLION) {
            remainder = number % ONE_MILLION;
            word = this.generateWordsINTL(Math.floor(number / ONE_MILLION)) + ' million,';

        } else if (number < ONE_TRILLION) {
            remainder = number % ONE_BILLION;
            word = this.generateWordsINTL(Math.floor(number / ONE_BILLION)) + ' billion,';

        } else if (number < ONE_QUADRILLION) {
            remainder = number % ONE_TRILLION;
            word = this.generateWordsINTL(Math.floor(number / ONE_TRILLION)) + ' trillion,';

        } else if (number <= MAX) {
            remainder = number % ONE_QUADRILLION;
            word = this.generateWordsINTL(Math.floor(number / ONE_QUADRILLION)) +
                ' quadrillion,';
        }

        words.push(word);
        return this.generateWordsINTL(remainder, words);
    },
    generateWordsIN(number) {
        var remainder, word,
            words = arguments[1];

        if (number === 0) {
            return !words ? 'zero' : words.join(' ').replace(/,$/, '');
        }

        if (!words) {
            words = [];
        }

        if (number < 0) {
            words.push('minus');
            number = Math.abs(number);
        }

        if (number < 20) {
            remainder = 0;
            word = LESS_THAN_TWENTY[number];

        } else if (number < ONE_HUNDRED) {
            remainder = number % TEN;
            word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
            if (remainder) {
                word += '-' + LESS_THAN_TWENTY[remainder];
                remainder = 0;
            }

        } else if (number < ONE_THOUSAND) {
            remainder = number % ONE_HUNDRED;
            word = this.generateWordsIN(Math.floor(number / ONE_HUNDRED)) + ' hundred';

        } else if (number < ONE_LAKH) {
            remainder = number % ONE_THOUSAND;
            word = this.generateWordsIN(Math.floor(number / ONE_THOUSAND)) + ' thousand,';

        } else if (number < ONE_CRORE) {
            remainder = number % ONE_LAKH;
            word = this.generateWordsIN(Math.floor(number / ONE_LAKH)) + ' lakh,';
        }
        else if (number < ONE_HUNDRED_CRORES) {
            remainder = number % ONE_CRORE;
            word = this.generateWordsIN(Math.floor(number / ONE_CRORE)) + ' crore,';
        }
        else if (number < ONE_THOUSAND_CRORES) {
            remainder = number % ONE_HUNDRED_CRORES;
            crore_fix = (remainder < ONE_CRORE) ? ' hundred crore,' : ' hundred,'
            word = this.generateWordsIN(Math.floor(number / ONE_HUNDRED_CRORES)) + crore_fix;
        }
        else if (number < ONE_LAKH_CRORES) {
            remainder = number % ONE_THOUSAND_CRORES;
            crore_fix = (remainder < ONE_CRORE) ? ' thousand crore,' : ' thousand,'
            word = this.generateWordsIN(Math.floor(number / ONE_THOUSAND_CRORES)) +
                crore_fix;
        }
        else if (number < ONE_CRORE_CRORES) {
            remainder = number % ONE_LAKH_CRORES;
            crore_fix = (remainder < ONE_CRORE) ? ' lakh crore,' : ' lakh,'
            word = this.generateWordsIN(Math.floor(number / ONE_LAKH_CRORES)) +
                crore_fix;
        }

        words.push(word);
        return this.generateWordsIN(remainder, words);
    }
}
