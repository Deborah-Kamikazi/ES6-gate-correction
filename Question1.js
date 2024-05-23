// Write a function in JavaScript that takes an array of strings combined with numbers as input and returns a new array containing the original string and the extracted numeric values from those strings.
// const input = ["Hello123", "World456", "49", "Another789"];
// const output = extractWordsAndNumbers(input);

// // console.log(output);
// output: [  "Hello",123, "World", 456, 49, "Another", 789] 


function num(input){
    let letters = []
   
  input.forEach((items)=>{
     let letter =  items.split("").filter((el)=> !Number(el)).join('');
     let number = items.split("").filter((el)=>  Number(el)).join('');
     if(letter) {letters.push(letter) } 
     if(letter) {letters.push(Number(number)) } 
    
     
    
  })  
console.log(letters);

        
    
   

}
console.log(num(["Hello123", "World456", "49", "Another789"]))