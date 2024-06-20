#!/usr/bin/node
const numbers = [1, 2, 3, 12, 5, 12, 7, 12];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 12) {
    numbers[i] = 89;
  }
}
console.log(numbers);

