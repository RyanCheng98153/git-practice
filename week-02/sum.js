function test( func ){
    // a reusable testing function
    console.time(`function ${func.name}()`);
    sum = func([1, 5, 3, 2]); // 11
    console.timeEnd(`function ${func.name}()`);
}

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
    arr.map(val => sum += val);
    return sum;
}


function sumReduce(ary) {
	return ary.map((curVal) => sum + curVal, 0)
}

function sumRecursive(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
  }

for ( const x of Array(5).keys() ){
    test(sumForloop)
    test(sumMap)
    test(sumForloop)
    test(sumArray)
}
    