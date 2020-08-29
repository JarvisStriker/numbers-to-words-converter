import helpers from "./helpers";
import { SYSTEM } from "./constants";

export default {
    isSafeNumber: (num: number): boolean => {
        return helpers.isSafeNumber(num);
    },
    toWords: (val: string, type: SYSTEM): string => {
        val = helpers.removeCommas(val).toString();

        if (helpers.isSafeNumber(parseInt(val))) {
            console.log();
            if (type === SYSTEM.INTL)
                return helpers.generateWordsINTL(parseInt(val));
            else return helpers.generateWordsIN(parseInt(val));
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
