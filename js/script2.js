var a = parseFloat(prompt("enter a", ""));
var b = parseFloat(prompt("enter b", ""));
var c = parseFloat(prompt("enter c", ""));
var disc = b * b - 4 * a * c;
var res1 = ((-b) + Math.sqrt(disc)) / (2 * a);
var res2 = ((-b) - Math.sqrt(disc)) / (2 * a);
console.log(`Рівняння ${a}x\xB2 + ${b}x + ${c} = 0 має розв’язки: x1 = ${res1}, x2 = ${res2}`);
