const fibonacci = (n) => {
  return n===0 ? 0 : n===1 ? 1 : (fibonacci(n-1)+ fibonacci(n-2));
}

console.log(fibonacci(8))
0, 1, 1, 2, 3, 5, 8, 13
