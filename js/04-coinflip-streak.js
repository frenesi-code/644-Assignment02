let coinFlip;
let isTail;

do {
    coinFlip = parseInt(Math.round(Math.random()));

    if (coinFlip === 0) {
        isTail = false;
        console.log("Heads");
    } else {
        isTail = true;
        console.log("Tails");
    }
} while (!isTail);

