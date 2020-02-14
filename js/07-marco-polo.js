let iterationsNumber = 100;
let multiples3 = 3;
let multiples5 = 5;

for (let i = 1; i <= iterationsNumber; i++) {
    
    if ((i % 3 === 0) && (multiples3 += i)) {
        console.log("Marco!      | Multiple Number Double Check => " + i);
        
    }

    if ((i % 5 === 0) && (multiples5 += i)) {
        console.log("Polo!       | Multiple Number Double Check => " + i);        
    }
 
    if (((i % 3 === 0) && (multiples3 += i)) && ((i % 5 === 0) && (multiples5 += i))) {
        console.log("Marco Polo! | Multiple Number Double Check => " + i);                
    }
}