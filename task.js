let numbers = [5, 8, 0, 1, 9, 11, 15, 16];
let immutableArray = Array.from(numbers); //making the array immutable

console.log("Original numbers list: ", numbers);

const BubbleSortAsc = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			//first correct: subtract the array from first itration "i"
			if (arr[j] > arr[j + 1]) {
				let left = arr[j]; //adding convenient naming to make it more readable
				let right = arr[j + 1];
				arr[j] = right; //second correct: replace the index to be the second iteration "j"
				arr[j + 1] = left;
			}
		}
	}
	return arr;
};

console.log("Numbers list After sorting: ", BubbleSortAsc(immutableArray));

const BubbleSortDesc = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] < arr[j + 1]) {
				let left = arr[j];
				let right = arr[j + 1];
				arr[j] = right; //third correct: replace the index to be the second iteration "j"
				arr[j + 1] = left;
			}
		}
	}
	return arr;
};

console.log(
	"Numbers list After Desc sorting: ",
	BubbleSortDesc(immutableArray)
); //here we invoked the function
