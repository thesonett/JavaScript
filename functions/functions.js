function outerFunc() {

    function innerFunc() {
        console.log('This is a inner function!')
    }

    return innerFunc
}

// console.log(outerFunc().innerFunc()) // not gonna work!
// console.log(outerFunc.innerFunc()) // innerfunc is not globally accessed function!
console.log(outerFunc()()) // works!
const fn = outerFunc()
fn() // also works

console.log('\n')

// An IIFE (pronounced "iffy") is a function that runs immediately after it's defined.
// The parentheses around the function are required to tell JavaScript it's a function expression, not a declaration.
;(function () {
    console.log('I ran immediately!');
})(); // must put ; because it doesn't know where the context ends! //NOTE: Both on starting and ending ;