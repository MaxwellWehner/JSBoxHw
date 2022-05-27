let input = prompt("Enter a side length");
let ans = [];
let str = "";
console.log("Input side length: ", input);
let len = +input;
for (let i = len; i >= 1; i--) {
	for (let k = 0; k < len - i; k++) {
		str += " ";
	}
	for (let j = 0; j < i; j++) {
		str += "*";
	}
	str += "\n";
}

console.log(str);
