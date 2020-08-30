import {
    literalValues as constant,
    LESS_THAN_TWENTY,
    TENTHS_LESS_THAN_HUNDRED
} from "./constants";
let crore_fix = "";

export default {
    isSafeNumber(num: number): boolean {
        return constant.MAX_SAFE_INTEGER >= num &&
            constant.MIN_SAFE_INTEGER <= num
            ? true
            : false;
    },
    removeCommas(val: string): string {
        const value = val.toString().replace(/,/g, ""); // 11,46,57,754 => 114657754
        return parseInt(value, 10).toString();
    },
    generateWordsINTL(number: number, words?: string[]): string {
        let remainder = 0,
            word = "";

        if (number === 0) {
            return !words ? "zero" : words.join(" ").replace(/,$/, "");
        }

        if (!words) {
            words = [];
        }

        if (number < 0) {
            words.push("minus");
            number = Math.abs(number);
        }

        if (number < 20) {
            remainder = 0;
            word = LESS_THAN_TWENTY[number];
        } else if (number < constant.ONE_HUNDRED) {
            remainder = number % constant.TEN;
            word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / constant.TEN)];
            // In case of remainder, we need to handle it here to be able to add the “-”
            if (remainder) {
                word += "-" + LESS_THAN_TWENTY[remainder];
                remainder = 0;
            }
        } else if (number < constant.ONE_THOUSAND) {
            remainder = number % constant.ONE_HUNDRED;
            word =
                this.generateWordsINTL(
                    Math.floor(number / constant.ONE_HUNDRED)
                ) + " hundred";
        } else if (number < constant.ONE_MILLION) {
            remainder = number % constant.ONE_THOUSAND;
            word =
                this.generateWordsINTL(
                    Math.floor(number / constant.ONE_THOUSAND)
                ) + " thousand,";
        } else if (number < constant.ONE_BILLION) {
            remainder = number % constant.ONE_MILLION;
            word =
                this.generateWordsINTL(
                    Math.floor(number / constant.ONE_MILLION)
                ) + " million,";
        } else if (number < constant.ONE_TRILLION) {
            remainder = number % constant.ONE_BILLION;
            word =
                this.generateWordsINTL(
                    Math.floor(number / constant.ONE_BILLION)
                ) + " billion,";
        } else if (number < constant.ONE_QUADRILLION) {
            remainder = number % constant.ONE_TRILLION;
            word =
                this.generateWordsINTL(
                    Math.floor(number / constant.ONE_TRILLION)
                ) + " trillion,";
        } else if (number <= constant.MAX) {
            remainder = number % constant.ONE_QUADRILLION;
            word =
                this.generateWordsINTL(
                    Math.floor(number / constant.ONE_QUADRILLION)
                ) + " quadrillion,";
        }

        words.push(word);
        return this.generateWordsINTL(remainder, words);
    },
    generateWordsIN(number: number, words?: string[]): string {
        let remainder = 0,
            word = "";

        if (number === 0) {
            return !words ? "zero" : words.join(" ").replace(/,$/, "");
        }

        if (!words) {
            words = [];
        }

        if (number < 0) {
            words.push("minus");
            number = Math.abs(number);
        }

        if (number < 20) {
            remainder = 0;
            word = LESS_THAN_TWENTY[number];
        } else if (number < constant.ONE_HUNDRED) {
            remainder = number % constant.TEN;
            word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / constant.TEN)];
            if (remainder) {
                word += "-" + LESS_THAN_TWENTY[remainder];
                remainder = 0;
            }
        } else if (number < constant.ONE_THOUSAND) {
            remainder = number % constant.ONE_HUNDRED;
            word =
                this.generateWordsIN(
                    Math.floor(number / constant.ONE_HUNDRED)
                ) + " hundred";
        } else if (number < constant.ONE_LAKH) {
            remainder = number % constant.ONE_THOUSAND;
            word =
                this.generateWordsIN(
                    Math.floor(number / constant.ONE_THOUSAND)
                ) + " thousand,";
        } else if (number < constant.ONE_CRORE) {
            remainder = number % constant.ONE_LAKH;
            word =
                this.generateWordsIN(Math.floor(number / constant.ONE_LAKH)) +
                " lakh,";
        } else if (number < constant.ONE_HUNDRED_CRORES) {
            remainder = number % constant.ONE_CRORE;
            word =
                this.generateWordsIN(Math.floor(number / constant.ONE_CRORE)) +
                " crore,";
        } else if (number < constant.ONE_THOUSAND_CRORES) {
            remainder = number % constant.ONE_HUNDRED_CRORES;
            crore_fix =
                remainder < constant.ONE_CRORE
                    ? " hundred crore,"
                    : " hundred,";
            word =
                this.generateWordsIN(
                    Math.floor(number / constant.ONE_HUNDRED_CRORES)
                ) + crore_fix;
        } else if (number < constant.ONE_LAKH_CRORES) {
            remainder = number % constant.ONE_THOUSAND_CRORES;
            crore_fix =
                remainder < constant.ONE_CRORE
                    ? " thousand crore,"
                    : " thousand,";
            word =
                this.generateWordsIN(
                    Math.floor(number / constant.ONE_THOUSAND_CRORES)
                ) + crore_fix;
        } else if (number < constant.ONE_CRORE_CRORES) {
            remainder = number % constant.ONE_LAKH_CRORES;
            crore_fix =
                remainder < constant.ONE_CRORE ? " lakh crore," : " lakh,";
            word =
                this.generateWordsIN(
                    Math.floor(number / constant.ONE_LAKH_CRORES)
                ) + crore_fix;
        }

        words.push(word);
        return this.generateWordsIN(remainder, words);
    }
};
