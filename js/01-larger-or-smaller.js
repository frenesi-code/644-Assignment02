/**
 *  Create an application that accepts two integers within two separate prompts. 
 *  Then, display only the larger of the two within the browser window. Don’t forget 
 *  to handle the fact that the two could be equal.
 */

class HandleNumbers {
    constructor(intA, intB) {                
        this.checkNumbers(intA, intB);
    }

    checkNumbers(intA, intB) { 
        let result = '';
        
        if (intA === intB) {
            window.alert("You've typed two equal numbers!");
        }
        
        if (intA > intB) {
            window.alert("Number A is bigger than B!");
        }
    
        if (intA < intB) {
            window.alert("Number B is bigger than A!");
        }
    
        return result;
    }    
}

let intA = parseInt(window.prompt("Type A number"));
let intB = parseInt(window.prompt("Type B number"));

new HandleNumbers(intA, intB);