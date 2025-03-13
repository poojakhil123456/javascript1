 this commit for Session-2 

JavaScript handles variables and memory management

I have learn about that what is variables in javascript and  How Variables Are Stored in Memory . 
A variable in JavaScript is a named container that stores data values, and memory is allocated for it when it is declared. 
It allows us to store, retrieve, and manipulate data in a program.  
we have three types of variables var (old way) , let , const .  var is function- scoped and can be re-declared and  reassigned.
let and const are simillar both are block- scoped .but they have some key differences: let can be re-declared but not cannot be  reassigned . and const can not be re-declared
and also not reassigned. it's value is fixed . 

JavaScript Stores Different Types of Data in Memory
1. Stack Memory - For simple (primitive) data types.
2. Heap Memory - For complex (reference) data types.

Stack memory is a fast, fixed-size memory where JavaScript stores primitive data types.

Primitive Data Types Stored in Stack Memory


- Numbers → `let age = 25;`
- Strings → `let name = "John";`
- Booleans → `let isActive = true;`
- Undefined → `let x;`
- Null → `let value = null;`
- Symbols → `let id = Symbol("unique");`
- BigInt → `let bigNum = 9007199254740991n;`

Heap memory is a large, dynamically allocated memory where JavaScript stores complex (reference) data types.

Reference Data Types Stored in Heap Memory

1. Objects (`{ key: "value" }`)
2. Arrays (`[1, 2, 3]`)
3. Functions (`function() {}`)
4. Dates (`new Date()`)

