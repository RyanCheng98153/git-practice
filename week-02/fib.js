function test( fib ){
  // a reusable testing function
  console.time(`function ${fib.name}() `);
  fib(0); // 0
  fib(1); // 1
  fib(5); // 5
  fib(10); // 55
  fib(20); // 6765
  fib(30); // 832040 
  // console.log(fib(40)); // 102334155
  console.timeEnd(`function ${fib.name}() `);
}

function fib(n) {
  // TODO: implement fibonacci
  if (n<2) {
    return n
  }
  return fib(n-1) + fib(n-2)
}

function fib(n) {
  // TODO: implement fibonacci
  return n<2 ? n : fib(n-1) + fib(n-2)
}

test(fib2)
test(fib)