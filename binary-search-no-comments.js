function binarySearch(arr, target) {
    let first = 0;
    let last = arr.length - 1;

    while (first <= last) {
        const midpoint = Math.floor((first + last) / 2);

        if (arr[midpoint] === target) {
            return midpoint;
        } else if (arr[midpoint] < target) {
            first = midpoint + 1;
        } else {
            last = midpoint - 1;
        }
    }

    return -1;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result1 = binarySearch(numbers, 3);
console.log(`Number at index ${result1} of an array "numbers" is ${numbers[result1]}\n`);

const result2 = binarySearch(numbers, 15);
console.log(`Number at index ${result2} is ${numbers[result2]}\n`);
