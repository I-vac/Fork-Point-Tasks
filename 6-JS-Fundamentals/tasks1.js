// 1va tochka
// function greaterNumber(x, y) {
//     let message = "Variables are out of scope";
//     if(isNaN(x) || isNaN(y)){ 
//         return message;
//     }
  
//     if((x >= 40) && ( x <= 60) && (y >= 40) && (y <= 60)){
    
        
//     if(x > y){
//         return ("The greater number is x:" + x);
//     }else if (x < y){
//          return ("The greater number is y:" + y);
//     }else if (x == y){
//          return "Both numbers are the same";
//     }
//     }   
// }

// console.log(greaterNumber(14,50));
// console.log(greaterNumber(50,50));
// console.log(greaterNumber(20,80));
// console.log(greaterNumber(41,50));
// console.log(greaterNumber(55,44));
// console.log(greaterNumber("ad",50));

// 2ra tochka //da obyrna chisloto naobratno

// function sumArray(array){
//     if(array.length != 3){
//         return "Array must be of 3 elements"
//     }

//     if(isNaN(array[0]) || isNaN(array[1]) || isNaN(array[2])){
//         return "The array must be numbers"
//     }
    
//     return array[0]+ array[1]+ array[2];
//     }

// console.log(sumArray([10, 32, 20]));  
// console.log(sumArray([5, 7])); 
// console.log(sumArray(["d", 8, -11]));

// 3ta tochka
// let array = [1, 15, 26, 45]
// console.log(array.toString().split("").reverse().join(""));


// let number = 14;
// console.log(number.toString().split("").reverse().join(""));

//4ta tochka

// function computeFactor(number){
//     let factor = [];
//     for(let i = 1; i <= number; i++){
//       if(number % i === 0){
//         factor.push(i);
//       }
//     }
//     return factor;
// }

// console.log(computeFactor(20));

//5ta tochka
// function swapPairs(number){
//   if (number.toString().length % 2 != 0){
//     return "The string must be of even length";
//   }
//   let result = 0;
//   let base_number = 1;
//   while (number != 0){
//     let digit1 = number % 10;
//     let digit2 = ((number - digit1)/ 10) % 10;
//     result += base_number * (10 * digit1 + digit2);
//     number = Math.floor(number / 100);
//     base_number *= 100;
//   }
//   return result;
  
// }

// console.log(swapPairs(1234));
// console.log(swapPairs(12345));
// console.log(swapPairs(123456));
// console.log(swapPairs(15161920));

//6ta tochka
// function largestOf5(){
//  // var arguments = Array.prototype.slice.call(arguments);
//   if (arguments.length != 5){
//     return "the string must be of 5 numbers";
//   }

  
//   return Math.max(...arguments);
// }

// console.log(largestOf5(1,2,5,4,3));
// console.log(largestOf5(20,9,5,4,8,7));


//7ma tochka

// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join(","));
// console.log(myColor.join("."));
// console.log(myColor.join("+"));

//8ma tochka
// function isItArray(input) {
//   if (Array.isArray(input)){
//     return "It is an array";
//   }else {
//     return "it is not an array";   
//   } 
  
// };

// console.log(isItArray(new Array));
// console.log(isItArray('blablabla'));
// console.log(isItArray([1, 2, 4, 0]));
// console.log(isItArray('some more text'));
// console.log(isItArray('dawFaf'));
// console.log(isItArray([1, 5, 2]));
// console.log(isItArray(["ad", 9, 20]));


//9ta tochka
// function getGCD(number1,number2){
//   let message = "You must put 2 numbers"
  
  
//   if(typeof number1 !== "number" || typeof number2 !== "number"){ // proverqva dali sa podadeni chisla
//     return message;
//   }

//   if(arguments.length != 2){ //proverqva dali sa podadeni samo 2 chisla
//     return message;
//   }

//   number1 = Math.abs(number1);
//   number2 = Math.abs(number2);
//   while(number2) {
//     var temp = number2;
//     number2 = number1 % number2;
//     number1 = temp;
//   }
//   return number1;
// }

// console.log(getGCD(13, 15));
// console.log(getGCD(8, 12));
// console.log(getGCD(20, 10));
// console.log(getGCD(13, 15, 33));
// console.log(getGCD("3", 15));
// console.log(getGCD(15, "3"));

//10ta tochka
// let student = {
//   name : "David Rayy",
//   sclass : "VI",
//   rollno : 12
//   };

//   let keys = Object.keys(student)
//   console.log(keys);

//11ta tochka
// const string1 = "         11ta tochka         ";
// const string2 = "     lorem ipsum, some text.                     ";
// console.log(string1.trim());
// console.log(string2.trim());

//12ta tochka
// function remove1st(string, searchString){

//   let index = string.indexOf(searchString);
// 	if (index === -1) {
// 		return string;
// 	}
// 	return string.slice(0, index) + string.slice(index + searchString.length);
// }
// console.log(remove1st("1 2 3 4 5 6 1 1 ","3"));
// console.log(remove1st("tekst s mnogo povtoreniq v tekst tekst","tekst s"));

//13ta tochka


//14ta tochka
// function removeTags(string){

//   if ((string === null) || (string === "")){
//     return "The string shouldn't be empty";
//   }else{
//   string = string.toString();
//     return string.replace(/<[^>]*>/g, "");
//   }
// }

// console.log(removeTags("<p><strong><em>PHP Exercises</em></strong></p>"));

//15ta tochka
// function lastWord(word, string) {

//   var index = word.length - string.length;
//   return index >= 0 && word.indexOf(string, index) > -1;
// }

// console.log(lastWord("Some random text with last word pickle", "pickle"));

//16ta tochka
// var student = {
//   name : "David Rayy",
//   sclass : "VI",
//   rollno : 12
// };

// let keys = Object.keys(student).length
// console.log(keys);

//17ta tochka
// function firstElement(array, number){
//   if (array == null){
//   return "The array is null";
//   }

//   if (number == null) {
//   return "The number is null";
//   }

//   if (number < 0){
//   return "The number is less than 0";
//   }
  
// return array.slice(0, number);
// };

// console.log(firstElement([7, 9, 0, -2]));
// console.log(firstElement([],3));
// console.log(firstElement([7, 9, 0, -2],3));
// console.log(firstElement([7, 9, 0, -2],6));
// console.log(firstElement([7, 9, 0, -2],-3));

//18ta tochka
// let array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let frequency = 1;
// let counter = 0;
// let mostFrequent;

// for (let i = 0; i < array.length; i++) {
//   for (let x = i; x < array.length; x++) {

//     if (array[i] == array[x]) counter++;
    
//     if (frequency < counter) {
//       frequency = counter;
//       mostFrequent = array[i];
//     }
//   }

//   counter = 0;
// }

// console.log("The most frequent item is : \"" + mostFrequent + "\" Seen ( " + frequency + " times ) ");

//19ta tochka
// for ( let i = 1; i <= 100; i++){

//   if (i % 3 === 0 && i % 5 === 0){
//     console.log(i + "FizzBuzz");
//   }
//   else if (i % 5 === 0){
//     console.log(i + "Buzz");
//   }
//   else if (i % 3 === 0){
//     console.log( i + "Fizz");
//   }
//   else
//   {
//     console.log(i);
//   }
// }

//20ta tochka
// for (let i = 0; i <= 15; i++){
//   if (i % 2 == 0 ){
//     console.log("the number: "+ i +" is even");
//   }
//   else{
//     console.log("the number: "+ i +" is odd");
//   }
 
// }

//21va tochka
// function first5HappyNum(number){

//   let x, y ;
//   let cycle = [] ;

//   while(number != 1 && cycle[number] !== true) 
//   {
//       cycle[number] = true ;
//       x = 0 ;
//       while (number > 0) {
//           y = number % 10 ;
//           x += y * y ;
//           number = (number  - y) / 10 ;
//       }
//       number = x ;
//   }
//   return (number == 1) ;
// }

// let count = 5;
// let num = 1;
// let first5 = ""; 
// while(count-- > 0) 
// {
//   while(!first5HappyNum(num))
//       num++ ;
// first5 = first5 + (num + ", ") ;

//   num++ ;
// }
// console.log("The first 5 happy numbers are: " + first5);

//22ra tochka
// function missingAngleType(angle){
//   if (angle > 0 && angle < 90){
//     return "The angle is acute";
//   }
//   else if (angle == 90){
//     return "The angle is right";
//   }
//   else if (angle > 90 && angle < 180){
//     return "The angle is obtuse";
//   }
//   else {
//     return "The angle is out of scope";
//   }
// }
// console.log(missingAngleType(-15));
// console.log(missingAngleType(30));
// console.log(missingAngleType(90));
// console.log(missingAngleType(163));
// console.log(missingAngleType(180));