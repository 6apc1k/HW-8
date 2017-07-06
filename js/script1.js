var euro = parseFloat(prompt("Enter euros amount", ""));
var dollar = parseFloat(prompt("Enter dollars amount", ""));
var dollarCrossRate = 26.05;
var euroCrossRate = 29.7;
var euroUah = euro * euroCrossRate;
var dollarUah = dollar * dollarCrossRate;
var euroDollar = euroCrossRate / dollarCrossRate;

alert(`${euro} euros are equal ${euroUah} UAH, ${dollar} dollars are equal ${dollarUah} UAH, one euro is equal ${euroDollar} dollars.`);