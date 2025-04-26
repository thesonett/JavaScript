// type coercion:
// + operator is special—it triggers string concatenation if either operand is a string.
    // If both are numbers → addition
    // If both are strings → concatenation
    // If both are booleans → converted to numbers → then addition
    // But if one is a string, everything becomes a string
    
// -, *, /, etc. always convert to numbers.

console.log(2 + 2 + '3') // '43'
console.log(2 + '3') // '23'
console.log('2' + 2 + 2) // '222'
console.log('2' + 3) // '23'
console.log(2 + '3' + 2) // '232'
console.log(+('3') + 2 ) // 5

console.log('\n')

console.log(false + true) // 0 + 1 = 1
console.log(false - true) // 0 - 1 = -1
console.log(true + 1) // 1 + 1 = 2
console.log([] + []) // '' + '' = ''
console.log([] - []) // '' - '' -> 0 - 0 = 0
console.log([] + 1) // '' + 1 = '1'
console.log(1 + []) // 1 + '' = '1'
console.log({} + {}) // [object Object][object Object]
console.log({} + []) // [object Object]
console.log([] + {}) // [object Object]
console.log([] - 1) // '' -> 0 - 1 => -1
console.log([1] - 1) // [1] -> '1' -> 1 - 1 => 0
console.log(1 + NaN) // NaN
console.log(null + null) // 0 + 0 = 0
console.log('\n')

// more
console.log([1] + [2, 3]) // '1' + '2,3' => '12,3'
console.log([1] - [2, 3]) // '1' - '2, 3' -> 1 - NaN => NaN
console.log([] + null) // '' + null => 'null'
console.log([] - null) // '' - 0 -> 0 - 0 => 0
console.log({} - 1) // NaN