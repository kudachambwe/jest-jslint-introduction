
"use strict";

const sum = require('./sum');

test("should return sum correct", () => {
    expect(sum(3,2)).toBe(5);
    expect(sum(1,2)).toBe(3);
});

test("should return sum of 3 and 4", () => {
    expect(sum(3,4)).toBe(7);
});





