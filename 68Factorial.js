function factorialIterative(n) {
  if (n < 0) return "Factorial is not defined for negative numbers";
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage
const number = 5;
console.log(`Factorial of ${number} is ${factorialIterative(number)}`);
