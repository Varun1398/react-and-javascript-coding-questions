let number = 1111;
let originalNumber = number;
let sum = 0;

while (number > 0) {
    sum += number % 10; // Get the last digit and add it to the sum
    number = Math.floor(number / 10); // Remove the last digit
}
