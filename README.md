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