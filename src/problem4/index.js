// Method 1: Using a simple for-loop
function loopSum(n) {
  // Time Complexity: O(n) – runs from 1 to n
  // Space Complexity: O(1) – uses constant space
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Method 2: Using direct math formula
function formulaSum(n) {
  // Time Complexity: O(1) – constant-time arithmetic
  // Space Complexity: O(1) – no additional memory used
  return (n * (n + 1)) / 2;
}

// Method 3: Using recursion
function recursiveSum(n) {
  // Time Complexity: O(n) – one call per number from n to 1
  // Space Complexity: O(n) – each call adds to the call stack
  if (n <= 1) return n;
  return n + recursiveSum(n - 1);
}

// Measure how long a function takes for given inputs
function runBenchmark(fn, values) {
  return values.map((val) => {
    const t0 = performance.now();
    fn(val);
    const t1 = performance.now();
    return { input: val, timeMs: t1 - t0 };
  });
}

// Run comparison between different methods
function testAll() {
  const inputs = [10, 100, 1000, 5000];
  const methods = [
    { label: "Loop", fn: loopSum },
    { label: "Formula", fn: formulaSum },
    { label: "Recursive", fn: recursiveSum },
  ];

  for (const method of methods) {
    console.log(`== ${method.label} ==`);
    const results = runBenchmark(method.fn, inputs);
    for (const res of results) {
      console.log(`n = ${res.input} → ${res.timeMs.toFixed(5)} ms`);
    }
    console.log("");
  }
}

testAll();
