let input = prompt("Enter a height and width");
let inputArr = input.split(" ").map((x) => Number.parseInt(x));
let str = "";
for (let i = 0; i < inputArr[0]; i++) {
	for (let j = 0; j < inputArr[1]; j++) {
		str += "*";
	}
	str += "\n";
}
console.log(str);
