# Learning JavaScript

## What is JavaScript?
- JavaScript is a high-level, interpreted programming language primarily used for web development to make websites interactive and dynamic.
- Multi-paradigm: functional & object-oriented style.
- Dynamically typed: Variable types are determined at runtime.
- Interpreted: Code is run line by line, without needing to compile.

## Is It Object Oriented or Prototype-based?
- ✅ JavaScript is prototype-based.
- In JavaScript, objects are created from other objects using prototypes. Every object can serve as a prototype for another object. Every object in JavaScript has an internal link to another object called its prototype. When you try to access a property or method on an object, JavaScript looks for it in the object. If not found, it looks up the prototype chain.
- But JS also has classes, introduced in ES6 (ECMAScript 2015) but this is just syntactic sugar over JavaScript's existing prototype-based inheritance. Under the hood, it's still using prototypes.
- JavaScript is object-oriented via prototype-based inheritance.

## var vs let vs const
- var: - function-scoped✅ not block-scoped❌
       - Hoisted to the top of its scope.
       - not initialized (undefined by default)
       - re-declarable & updatable
       ```javascript
            // var
            function person() {
                console.log(name) // undefined even with value
                var name = 'Joy'
                var name = 'sonett' // re-declarable
                console.log(name) // undefined only if not assigned

                if(true) {
                    var age = 23
                    console.log(`${name}: ${age}`)
                }

                console.log(age) // 23
            }

            console.log(name) // ReferenceError: name is not defined
            person()
        ```
- let: - Blocked scoped (within {}) as well as function scoped✅
       - Hoisted but not initialized (undefined by default)
       - updatable but not re-declarable in the same scope❌
       ```javascript
            // let
            function person() {
                console.log(name) // ReferenceError: Cannot access 'name' before initialization
                let name = 'Joy'
                let name = 'sonett' // not possible
                console.log(name) // undefined only if not assigned

                if(true) {
                    let age = 23
                    console.log(`${name}: ${age}`)
                }

                console.log(age) // ReferenceError: age is not defined
            }

            console.log(name) // ReferenceError: name is not defined
            person()
        ``` 
- const: - Blocked scoped (within {}) as well as function scoped✅
         - Must be initialized at declaration.
         - Cannot be re-assigned❌
         - Object properties or array elements can still be changed!
        ```javascript
                const obj = { name: "John" };
                obj.name = "Jane"; // ✅Allowed (mutation, not reassignment)
        ```
        ```javascript
            // const
            function person() {
                console.log(name) // ReferenceError: Cannot access 'name' before initialization
                name = 'sonett' // TypeError: Assignment to constant variable.
                const name; // SyntaxError: Missing initializer in const declaration
                const name = 'joy' // Must be initialized at declaration.
                console.log(name)
                
                if(true) {
                    const age = 23
                    console.log(`${name}: ${age}`)
                }

                console.log(age) // ReferenceError: age is not defined
            }

            console.log(name) // ReferenceError: name is not defined
            person()
        ```

## 