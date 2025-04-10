// Falsy values: false, 0, -0, 0n, '', null, undefined, NaN
// Truly values: 'hello', -1, 42, 3.14, [], {}, function(){}, Infinity

// converting to Number
let score = '33' // 33
score = '33abc' // NaN
score = null // 0
score = NaN // NaN
score = {} // NaN
score = [] // 0 **
score = [10] // 10
score = [10, 2, 4] // NaN
score = undefined // NaN 

let modifiedScore = Number(score)
console.table([typeof modifiedScore, modifiedScore])
console.log('\n')

// converting to Boolean
score = '33' // true
score = '' // false **
score = null // false
score = NaN // false
score = {} // true **
score = {name: 'joy'} // true
score = [] // true **
score = [10, 2, 4] // true
score = undefined // false **
score = 1 // true
score = 0 // false

modifiedScore = Boolean(score)
console.table([typeof modifiedScore, modifiedScore])
console.log('\n')

// converting to String
score = 33 // '33'
score = null // 'null'
score = NaN // 'NaN'
score = {} // '[object Object]'
score = [] // '' **
score = [10, 2, 4] // '10, 2, 4'
score = undefined // 'undefined'

modifiedScore = String(score)
console.table([typeof modifiedScore, modifiedScore])
console.log('\n')