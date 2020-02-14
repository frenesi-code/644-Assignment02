
for (let index = 0; index < 16; index++) {    
    console.log(index + oddOrEven(index));            
}

function oddOrEven(x) {
    return ( x & 1 ) ? " is odd" : " is even";
}