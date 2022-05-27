let input = prompt("Enter a side length");
let ans = [];
let str = "";
console.log("Input side length: ", input);
let len = +input;
for (let i = 1; i <= len; i++) {
	for (let j = 0; j < i; j++) {
		str += "*";
	}
	str += "\n";
}

console.log(str);
