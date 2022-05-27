let input = prompt("Enter a height and width");
let inputArr = input.split(" ").map((x) => Number.parseInt(x));
let str = "";

let spaces = 0;
console.log(inputArr);
let stars = inputArr[1];
for (let i = 0; i < inputArr[0]; i++) {
	for (let k = 0; k < spaces; k++) {
		str += " ";
	}
	for (let j = 0; j < stars; j++) {
		str += "*";
	}
	spaces += 1;
	stars -= 2;
	str += "\n";
}

console.log(str);
