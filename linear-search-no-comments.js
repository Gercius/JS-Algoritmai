function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result1 = linearSearch(numbers, 3);
console.log(`Number at index ${result1} of an array "numbers" is ${numbers[result1]}\n`);

const result2 = linearSearch(numbers, 15);
console.log(`Number at index ${result2} is ${numbers[result2]}\n`);
