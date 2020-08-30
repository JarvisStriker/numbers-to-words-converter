import helpers from "./helpers";
import { SYSTEM } from "./constants";

export const converter = {
    isSafeNumber: (num: number): boolean => {
        return helpers.isSafeNumber(num);
    },
    toWords: (val: string, type: SYSTEM): string => {
        val = helpers.removeCommas(val).toString();

        if (helpers.isSafeNumber(parseInt(val))) {
            switch (type) {
                case SYSTEM.INTL:
                    return helpers.generateWordsINTL(parseInt(val));
                case SYSTEM.IN:
                    return helpers.generateWordsIN(parseInt(val));
                default:
                    throw new Error("Invalid number system");
            }
        } else {
            throw new Error(
                "Used numerical value exceeds floating point precision"
            );
        }
    },
    delCommas: (val: string): string => {
        return helpers.removeCommas(val);
    }
};

export { SYSTEM } from "./constants";
