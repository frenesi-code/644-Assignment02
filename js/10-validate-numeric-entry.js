
let value = 0, investment = 0, rate = 0, years = 0;

let investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx"));
let rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
let years = parseInt(window.prompt("Enter number of years"));

value = investment;

for (let index = 1; index < years; index++) {
    value = value + (value * rate/100);
    
}

window.document.write("investment amount: $" + investment + "<br>");
window.document.write("interest rate: " + rate + "%<br>");
window.document.write("years " + years + "<br>");
window.document.write("Value: $" + value.toFixed(2));
