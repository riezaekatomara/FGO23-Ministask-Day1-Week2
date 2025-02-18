function printNumbers(n) {
  if (typeof n !== "number") return;
  for (let i = 1; i <= n; i++) {
    console.log(`${i} `);
    new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

printNumbers(10);
