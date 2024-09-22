function test( func ){
  // a reusable testing function
  console.time(`function ${func.name}() `);
  func(0); // 0
  func(1); // 1
  func(5); // 5
  func(10); // 55
  func(20); // 6765
  func(30); // 832040 
  // console.log(fib(40)); // 102334155
  console.timeEnd(`function ${func.name}() `);
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