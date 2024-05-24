# ES6-gate-correction


## Question I
```
Write a function in JavaScript that takes an array of strings combined with numbers as input and returns a new array containing the original string and the extracted numeric values from those strings.
const input = ["Hello123", "World456", "49", "Another789"];
const output = extractWordsAndNumbers(input);

// console.log(output);
output: [  "Hello",123, "World", 456, 49, "Another", 789] // E
```

## Question II

```
Write a function that takes an object as input and returns a new object with all the key-value pairs reversed (keys become values and values become keys)
const originalObj = {aa: "1", bf: "3", cq: "5"};
const reversedObj = reverseObject(originalObj);
// console.log(reversedObj); 
output: {"1": 'aa', "3": 'bf', "5": 'cq'} // Expected output
```

##  Question III 
```
Create a function that performs a deep comparison between two arrays of objects, checking for equality of nested properties.
const array1 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const array2 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

// console.log(deepEqualArrays(array1, array2));
output: true
......................................................................................

const array1 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const array2 = [
    { id: 3, name: "Alice ", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

// console.log(deepEqualArrays(array1, array2));
output: false


```