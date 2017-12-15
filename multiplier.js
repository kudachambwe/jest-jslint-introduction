
"use strict";


function checkNumbers(a, b) {
    return (!isNaN(a) && !isNaN(b));
}

function multiplier(a, b) {
    if (checkNumbers(a, b)) {
        return a * b;
    }

}

module.exports = multiplier;