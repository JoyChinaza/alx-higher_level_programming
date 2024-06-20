#!/usr/bin/node
const args = process.argv;
const firstArg = args[2];
const num = parseInt(firstArg);
if (isNaN(num)) {
  console.log("Missing number of occurrences");
  for (let i = 0; i < num; i++) {
    console.log("C is fun");
  }
}

