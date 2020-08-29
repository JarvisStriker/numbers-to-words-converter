import converter from "../src/index";
import { it } from "mocha";
import { assert } from "chai";
import { SYSTEM } from "../src/constants";

describe("INTL", () => {
    it("1", () => {
        const expected =
            "one hundred three million, two hundred seventy-eight thousand, nine hundred forty-four";
        const actual = converter.toWords("103,278,944", SYSTEM.INTL);
        assert.equal(actual, expected);
    });
    it("2", () => {
        const expected =
            "ten trillion, three million, two hundred seventy-eight thousand, nine hundred forty-four";
        const actual = converter.toWords("10,00,000,32,78,944", SYSTEM.INTL);
        assert.equal(actual, expected);
    });
});

describe("IN", () => {
    it("1", () => {
        const expected =
            "ten lakh crore, thirty-two lakh, seventy-eight thousand, nine hundred forty-four";
        const actual = converter.toWords("10,00,000,32,78,944", SYSTEM.IN);
        assert.equal(actual, expected);
    });
    it("2", () => {
        const expected =
            "one thousand, forty-six crore, thirty-two lakh, seventy-eight thousand, nine hundred forty-four";
        const actual = converter.toWords("10,,,46,3,278,944", SYSTEM.IN);
        assert.equal(actual, expected);
    });
});

describe("number safety", () => {
    it("is safe", () => {
        assert.isTrue(converter.isSafeNumber(1233445555));
    });

    it("is not safe", () => {
        assert.isFalse(converter.isSafeNumber(123123123123123123123445555));
    });
});

describe("delete commas", () => {
    it("removes commas", () => {
        assert.equal(converter.delCommas("10,,,46,3,278,944"), "10463278944");
    });
});
