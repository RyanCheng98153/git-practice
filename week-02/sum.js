// ary: number array
function sumForloop(ary) {
	// TODO: sum all elements in ary
    let sum = 0
    for (const val of ary){
        sum += val
    }
    return sum
}

function sumMap(ary) {
	let sum = 0;
    ary.map(val => sum += val);
    return sum;
}

function sumReduce(ary) {
	return ary.reduce((sum, curVal) => sum + curVal, 0)
}

function sumRecursive(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumRecursive(arr.slice(1));
  }

// TODO: 每次都是從 1 加到 10000，這樣的測試結果準確嗎？不同的程式語言結果一樣嗎？
//       OS 在 CPU 的處理上，會不會有 cache?
// TODO: 換成小一點的數字，結果如何？ 

function test( func, value ){
    // a reusable testing function
    var start = performance.now();
    let sum = func(value); // 11
    var end = performance.now();
    // console.log(end - start)
    return end - start;
}

// 喚醒CPU
for (const iter of Array(100).keys() ){
    let val = test(sumMap, [...Array(5).keys()])
    // console.log(val)
}

let iters = 1000

let map_time = 0
let reduce_time = 0
let forloop_time = 0
// let recursive_time = 0

for ( const x of Array(iters).keys() ){
    let value = [...Array(10000).keys()].map(i => i + 1);
    
    map_time += test(sumMap, value)
    reduce_time += test(sumReduce, value)
    forloop_time += test(sumForloop, value)
    // recursive_time += test(sumRecursive, value)
}
console.log( `map:     ${ (map_time / iters).toFixed(6) } ms` )
console.log( `reduce:  ${ (reduce_time / iters).toFixed(6) } ms` )
console.log( `forloop: ${ (forloop_time / iters).toFixed(6) } ms` )
console.log("")

// console.log( `${recursive_time / iters} (${recursive_time} / ${iters})` )

/* 筆記：
*   當執行 10000 次 recursive 時，raise RangeError: Maximum call stack size exceeded
    [ 實驗一 ]
    執行 1~10000 100 次：
    喚醒CPU: sumMap 加 5 items 1000 次
    Exp1:                   Exp2:                   Exp3:
        map:     0.050444 ms    map:     0.052417 ms    map:     0.052131 ms
        reduce:  0.040643 ms    reduce:  0.041612 ms    reduce:  0.041217 ms
        forloop: 0.009195 ms    forloop: 0.009570 ms    forloop: 0.009143 ms
    [ 實驗二 ]
    執行 1~10000 100 次：
    喚醒CPU: sumMap 加 1~10000 items 1000 次
    Exp1:                   Exp2:                   Exp3:
        map:     0.051932 ms    map:     0.050111 ms    map:     0.052597 ms
        reduce:  0.041498 ms    reduce:  0.039975 ms    reduce:  0.041766 ms
        forloop: 0.008743 ms    forloop: 0.008388 ms    forloop: 0.008619 ms
    [ 實驗三 ]
    執行 1~10000 100 次：
    喚醒CPU: sumMap 加 1~100000 items 1000 次
    Exp1:                   Exp2:                   Exp3:
        map:     0.055883 ms    map:     0.059683 ms    map:     0.057866 ms
        reduce:  0.040884 ms    reduce:  0.042708 ms    reduce:  0.042311 ms
        forloop: 0.008498 ms    forloop: 0.008908 ms    forloop: 0.008879 ms
    
    Note: 當喚醒CPU 的時間適量時，實驗函式所需時間減少
          當喚醒CPU 的時間太長時，實驗函式時間反而增加
    
    
        
        
*/