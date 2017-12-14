
"use strict";


function multiplier(a,b) {
    if (checkNumbers(a,b)) {
        return a*b;
    }

}

function checkNumbers(a,b) {
    return (!isNaN(a) && !isNaN(b));
}

module.exports = multiplier;