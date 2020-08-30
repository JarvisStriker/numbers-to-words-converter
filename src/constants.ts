export const Literals = [
    "MAX_SAFE_INTEGER",
    "MIN_SAFE_INTEGER",
    "TEN",
    "ONE_HUNDRED",
    "ONE_THOUSAND",
    "ONE_MILLION",
    "ONE_BILLION",
    "ONE_TRILLION",
    "ONE_QUADRILLION",
    "MAX",
    "ONE_LAKH",
    "ONE_CRORE",
    "ONE_HUNDRED_CRORES",
    "ONE_THOUSAND_CRORES",
    "ONE_LAKH_CRORES",
    "ONE_CRORE_CRORES"
] as const;

type Literal = typeof Literals[number];

export const literalValues: Record<Literal, number> = {
    MAX_SAFE_INTEGER: 9007199254740991, //2^53 - 1
    MIN_SAFE_INTEGER: -9007199254740991, //-(2^53 - 1)
    TEN: 10,
    ONE_HUNDRED: 100,
    ONE_THOUSAND: 1000,
    ONE_MILLION: 1000000,
    ONE_BILLION: 1000000000, //         1.000.000.000 (9)
    ONE_TRILLION: 1000000000000, //     1.000.000.000.000 (12)
    ONE_QUADRILLION: 1000000000000000, // 1.000.000.000.000.000 (15)
    MAX: 9007199254740992,
    ONE_LAKH: 100000,
    ONE_CRORE: 10000000,
    ONE_HUNDRED_CRORES: 1000000000,
    ONE_THOUSAND_CRORES: 10000000000,
    ONE_LAKH_CRORES: 1000000000000,
    ONE_CRORE_CRORES: 100000000000000
};
export const LESS_THAN_TWENTY = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
];
export const TENTHS_LESS_THAN_HUNDRED = [
    "zero",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
];

export enum SYSTEM {
    IN,
    INTL
}
