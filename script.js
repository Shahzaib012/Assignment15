// length of String....

// let a = "this is a string for length";
// console.log(a.length);

// replacing or copying string

// let stringOne = "this is  string one ";
// let stringTwo = stringOne.replace("this is string two");
// console.log(stringTwo);

// concatenating strings.

// let stringOne = "this is  string one ";
// let stringTwo = "this is  string one ";
// console.log(stringOne+stringTwo);

// comparing
// let stringOne = "this is  string one ";
// let stringTwo = "this is  string two ";
// if (stringOne == stringTwo){
//     console.log("both strings are equal to each other");
// }else{console.log("not equalz");}

// let str = "this is  string one ";
// let b = str.toUpperCase();
// console.log(b);


// let str = "THIS IS UPER CASE STRING ";
// let b = str.toUpperCase();
// console.log(b);


  
//   function toggleCase(str){
//     var result = "";
//     for (var i = 0; i <str.length; i++){
//         var char =  str.charAt(i);
//         if (char === char.toUpperCase()){
//             result += char.toLowerCase();
//         }else {
//             result += char.toUpperCase();
//         }
//     }
//     return result;
//   }
//   console.log(toggleCase("Hellow World"));
//   console.log(toggleCase("JavaScript"));
  

//   function countChars(str) {
//     let alphaCount = 0;
//     let digitCount = 0;
//     let specialCount = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       const char = str.charAt(i);
//       if (char.match(/[a-zA-Z]/)) {
//         alphaCount++;
//       } else if (char.match(/[0-9]/)) {
//         digitCount++;
//       } else {
//         specialCount++;
//       }
//     }
  
//     return {
//       alphabets: alphaCount,
//       digits: digitCount,
//       specialChars: specialCount
//     };
//   }
  
//   // Example usage
//   const result = countChars("Hello123#@!");
  
//   console.log(result.alphabets); // 5
//   console.log(result.digits); // 3
//   console.log(result.specialChars); // 2
  

//   function countChar (str){
//     let alphaCount = 0;
//     let digitCount = 0;
//     let specialCount = 0;

//     for (var i = 0; i < str.length; i++){
//         let char = str.charAt(i);
//         if (char.match(/[a-zA-Z]/)){
//             alphaCount++;
//         }else if ( char.match(/[0-9]/)){
//             digitCount++;
//         }else{
//             specialCount++;
//         }
//     }
//     return {
//         alaphabets : alphaCount,
//         digits : digitCount,
//         specialChars : specialCount
//     };
//   }
//   let result = countChar("Hello123#@!");
//   console.log(result.alaphabets +"alphabets =");
//   console.log(result.digits + "digits = ");
//   console.log(result.specialChars +"special Caharacters");


// function countChar(str){
//     let vowelCount = 0;
//     let consonentCount = 0;
    
    
//     for(var i = 0; i <str.length; i++){
//         let char = str.charAt(i);
//         if (char.match(/[a,e,i,o,u,A,E,I,O,U]/)){
//             vowelCount++;
//         }else if (!char.match(/[a,e,i,o,u,A,E,I,O,U]/)){
//             consonentCount++;
//         }else{
//             others++;
//         }
            
        
//     }
//     return {
// vowel : vowelCount,
// consonent: consonentCount


//     };
// }
// let result = countChar("where you living boy @$at In Uni?");
// console.log(result.vowel+"vowels");
// console.log(result.consonent+"consonent");


// let str = "where you living boy @$at In Uni?";
// let words = str.split(" ");
// let totalWords = words.length;
// console.log (totalWords);

// let str = "where you living boy @$at In Uni?";
// let spliting = str.split("");
// let reversed  =spliting.reverse();
// console.log (reversed);


// let str = "A man, a plan, a canal: Panama";
// let strr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
// var reversed = strr.split('').reverse().join('');

// console.log (reversed);
//  if (reversed === strr){
//     console.log("string is palindrom");
//  }else{console.log("it is not palindrom");};

// let str = " this is reversed ordder string";
// let reversed = str.split(' ').reverse().join(' ');
// console.log ("reversed order string  "+reversed);

// function findFirstOccurrence(str, char){
//     for (let i = 0;i <str.length;i++){
//         if (str[i] === char){
//             return i;
//         }
//     }
//     return -1;
// }
// let myString = "this is string";
// let char = "s";
// let index = findFirstOccurrence(myString,char);
// console.log(index);


// function findLastOccurrence(str, char){
//     for (let i = str.length -1;i >=0; i-- ){
//         if (str[i] === char){
//             return i;
//         }
//     }
//     return -1;
// }
// let myString = "this is string";
// let char = "s";
// let index = findLastOccurrence(myString,char);
// console.log(index);



// function findAllOccurrence(str, char){
//     let index = [];
//     for (let i = 0;i <str.length; i++ ){
//         if (str[i] === char){
//             index.push(i);
            
            
//         }
//         }
//         return index;
//     }
// let myString = "this is strings";
// let char = "s";
// let index = findAllOccurrence(myString,char);
// console.log(index);
// console.log("Length of Occurences "+index.length);



// function removeFirstOccurrence(str, char){
//     let index = [];
//     for (let i = 0;i <str.length; i++ ){
//         if (str[i] === char){
//             index.push(i);
            
            
//         }
//         }
//         return index;
//     }
// let myString = "this is strings";
// let char = "s";
// let index = removeFirstOccurrence(myString,char);
// console.log(index);
// let shifted =  index.slice(1);
// console.log(shifted);




// function removeAllOccurrences(str, char) {
//     let newString = "";
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] !== char) {
//         newString += str[i];
//       }
//     }
//     return newString;
//   }
  
//   // Example usage
//   const myString = "hello world";
//   const myChar = "o";
//   const newString = removeAllOccurrences(myString, myChar);
//   console.log(newString); // Output: "hell wrld"
  



// function removeFirstOccurrence(str, char) {
//     const index = str.indexOf(char);
//     if (index === -1) {
//       return str;
//     } else {
//       return str.slice(0, index) + str.slice(index + 1);
//     }
//   }
  
//   // Example usage
//   const myString = "hello world";
//   const myChar = "o";
//   const newString = removeFirstOccurrence(myString, myChar);
//   console.log(newString); // Output: "hell world"
  

// function replaceFirstOccurrence(str, oldChar, newChar) {
//     const index = str.indexOf(oldChar);
//     if (index === -1) {
//       return str;
//     } else {
//       return str.slice(0, index) + newChar + str.slice(index + 1);
//     }
//   }
  
//   // Example usage
//   const myString = "hello world";
//   const oldChar = "o";
//   const newChar = "er";
//   const newString = replaceFirstOccurrence(myString, oldChar, newChar);
//   console.log(newString); 
  

// function findFirstOccurrence(str, char){
//     for (let i = 0;i <str.length;i++){
//         if (str[i] === char){
//             return i;
//         }
//     }
//     return -1;
// }
// let myString = "this is this string";
// let split = myString.split(" ");
// let char = "string";
// let index = findFirstOccurrence(split,char);
// console.log(index);


// function findFirstOccurrence(str, char){
//     for (let i = str.length -1; i >=0 ; i--){
//         if (str[i] === char){
//             return i;
//         }
//     }
//     return -1;
// }
// let myString = "this is this string this string";
// let split = myString.split(" ");
// let char = "string";
// let index = findFirstOccurrence(split,char);
// console.log(index);


// function findAllOccurance(str,word){
//     let index = [];
//     for (let i = 0; i <str.length;i++){
//         if (str[i] === word){
//             index.push(i);
//         }
//     }
//     return index;
// }
// let myString = "this is all the all occurance of the word in the string";
// let split = myString.split(" ");
// let word = "the";
// let index = findAllOccurance(split, word);
// console.log(index);


// function findAllOccurance(str,word){
//     let index = "" ;
//     for (let i = 0; i <str.length;i++){
//         if (str[i] !== word){
//             index += str[i];
//         }
//     }
//     return index;
// }
// let myString = "this is all the all occurance of the word in the string";
// let split = myString.split(" ");
// let word = "the";
// let index = findAllOccurance(split, word);
// console.log(index);

