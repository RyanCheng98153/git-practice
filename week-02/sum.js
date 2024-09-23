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
    console.log(end - start)
    return end - start;
}

let time = [
    {"map": 0},
    {"reduce": 0},
    {"forloop": 0},
    {"recursive": 0}
]

for (const iter of Array(1).keys() ){
    let val = test(sumMap, [10, 2, 102, 43])
    console.log(val)
}

let iters = 100

for ( const x of Array(3).keys() ){
    let value = [...Array(10000).keys()].map(i => i + 1);
    if ( true ){
        value = [...Array(10000).keys()].map(i => i + 1);
    }
    
    time["map"] += test(sumMap, value)
    time["reduce"] += test(sumReduce, value)
    time["forloop"] += test(sumForloop, value)
    // time['recursive'] += test(sumRecursive, value)
}

console.log( `${time['map'] / iters} (${time['map']} / ${iters})` )
console.log( `${time['reduce'] / iters} (${time['reduce']} / ${iters})` )
console.log( `${time['forloop'] / iters} (${time['forloop']} / ${iters})` )
// console.log( `${time['recursive'] / iters} (${time['recursive']} / ${iters})` )

/* 筆記：
*   當執行 10000 次 recursive 時，maximum out of recursive 
* 
*/