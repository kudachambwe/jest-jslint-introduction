
"use strict";

const multiplier = require('./multiplier');

test("2 multiplied by 0 returns 0", () => {
    expect(multiplier(2,0)).toBe(0);
});

