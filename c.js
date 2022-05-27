let input = prompt("Enter a size");
let ans = [];
console.log("Input size: ", input);
let currLen = +input;
let outSideSpace = 0;
for (let i = 0; i < currLen; i++) {
	let temp = new Array(currLen).fill(" ");
	temp[outSideSpace] = "*";
	temp[temp.length - outSideSpace - 1] = "*";
	outSideSpace++;
	ans.push(temp.join(""));
}

console.log(ans.join("\n"));
