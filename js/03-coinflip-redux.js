let coinFlip;

for (let index = 0; index < 10; index++) {
    coinFlip = parseInt(Math.round(Math.random()));
    
    if (coinFlip === 0) {        
        console.log("Heads");
    } else {
        console.log("Tails");
    }    
}

