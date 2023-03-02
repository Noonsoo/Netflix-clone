function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    console.log(numbers[i]);
    for (let j = i + 1; j < numbers.length; i++) {
      console.log(numbers[i]);
    }
  }
}
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] + 1 !== numbers[i + 1]) {
    console.log(numbers[i] + 1);
  } else {
    console.log(false);
  }
}
const arry = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];

arry.filter((el, i, arr) => arr[i] !== arr[i + 1]);
