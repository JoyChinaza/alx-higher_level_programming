#!/usr/bin/node
const args = process.argv;
const firstArg = args[2];
const number = Number(firstArg);
if (!isNaN(number)) {
  console.log(`My number: ${number}`);
} else {
  console.log("Not a number");
}

