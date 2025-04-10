console.log(1 >= 1) // true
console.log(1 > 1) // false
console.log(2 == 2) // true
console.log(2 != 2) // false
console.log(2 != 10) // true
console.log(2 >= 4) // false

console.log('\n')

// weired comparisons
console.log(null > 0) // 0 > 0 => false
console.log(null >= 0) // 0 >= 0 => true
// No coercion happens with === (strict equality)
console.log(null === null) // null === null => true
console.log(null === 0) // null === 0 => false

console.log('\n')

// Any comparison with NaN is always => false
console.log(undefined === undefined) // true
console.log(undefined === null) // false
console.log(undefined == null) // **special case => true
console.log(undefined > 0) // false

console.log('\n')

// >, >=, <=, < // they usually convert operands to numbers, except when both are strings!
console.log('5' > 2) // 5 > 2 => true
console.log('4' < '2') // '4' < '2' => false
console.log('abc' > 5) // NaN > 5  => false
console.log('abc' >= 'abc') // true

// ==, === // Sometimes coerces to number, sometimes not — depends on the types!
console.log('2' == 2) // true (only value checking)
console.log('2' === 2) // false (both type & value checking)