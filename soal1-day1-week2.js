function printNumbersWithDelay(n) {
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function printNumbers() {
    if (typeof n !== "number") return;
    for (let i = 1; i <= n; i++) {
      console.log(i);
      await delay(1000);
    }
  }
  printNumbers();
}

printNumbersWithDelay(10);
