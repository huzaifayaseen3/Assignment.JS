        // function starts here 
//         function getSquareOrCube(num , operation){
//                 if (operation == "square "){
//                 let square = num * num ;
//                 console.log(square);
//                 return square +10 ;
//                 }
//                 else if (operation == "cube  "){
//                 let cube  = num * num * num  ;
//                 console.log(square);
//                 return cube  ;

//                 }
//         }
//        getSquareOrCube(6,"square ")
   


       

       //reasign per value update hogati hai 
       // redeclare mei nahi hoti 
        // function ends here 
        
        // Question 1 
// let a =prompt("Enter  First Name  : ");
// let b = prompt("Enter last Name ");
// alert(a +""+b);
        // Question  2
        // Question  3

// let word = prompt("Enter a word");
// let count = 0;
// let characters = word.toLowerCase().split('');
// for(let i = 0; i < characters.length; i++) {
//     // Check if character is 'n'
//     if(characters[i] === 'n') {
//         count++; // Increment counter
//     }
// }
// alert("The letter 'n' appears " + count + " times");
//      Question 4 
// let word = "JavaScript";
// let letter = "a";
// let index = [];

// for (let i = 0; i < word.length; i++) {
//   if (word[i].toLowerCase() === letter.toLowerCase()) {
//     index.push(i); // Stores all positions of 'a'
//   }
// }
// console.log(index);
//      Question 7 
// let word = "Hyderabad";
// let letters = word.split(''); 
// letters.splice(0, 5); 
// letters.unshift(..."Islam".split('')); 
// let newWord = letters.join(''); 
// document.write(`Original: ${word} <br> New: ${newWord}`); 
//              Question 8 

// let text = prompt("Enter your sentence:");

// if (text.includes("and")) {
//     let alter = text.replace(/and/g, "&");
//     alert(alter); // Show the changed text
// } else {
//     alert("No 'and' used in the text.");
// }
  //            Question 9 
// let str = prompt("Enter a number (e.g., '472'):");
// let num = Number(str); 

// console.log("Original value:", str, "(type:", typeof str + ")");
// console.log("Converted value:", num, "(type:", typeof num + ")");
//              Question 10
// let lower = prompt("Enter alphabets ")
// let upper = lower.toUpperCase();
// alert(upper);
//              Question 11
// let alpha = prompt("Enter the alphabet ")
// let result = alpha.slice(0,1).toUpperCase()+alpha.slice(1);
// alert(result)
//              Question 16 
// var university = "UniversityofKarachi";
// let result = university.split('');
// alert(result);
//              Question 13
// let name = prompt("Enter an alphabet:");

// if (name === "@" || name === "." || name === "," || name === "!") {
//     alert("Enter a valid name");
// } else {
//     alert(name);
// }
//              question 14
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("What do you want to order?");
// let searchItem = userInput.toLowerCase();
// let found = false;
// for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === searchItem) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     alert("Available");
// } else {
//     alert("Not available");
// }
/////////  Assignment JS 06 (  STARTS  )////////////////////
/////////  Assignment JS 06( ENDS ) ////////////////////
/////////  Assignment JS 07 ( STARTS ) ////////////////////
//              Q1
//let date = new Date();
//alert( date)
//let day = date.getDay();
//alert(day)// it display number if day like thursdaty is at 4
//Q2 
//let monthNames = [
//   "January", "February", "March", "April", 
//   "May", "June", "July", "August",
//   "September", "October", "November", "December"
//];
 //let now = new Date();
 //let pMonth = now.getMonth();//ye new date sa value get kar ke la rah ahai
 //alert(monthNames[pMonth])
 //Q3
//  let short =monthNames[pMonth].slice(0,2)
//  alert(short)
//q4
//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let now  = new Date();
// let day = now.getDay();
// alert(dayNames[day]);
// if(dayNames[day] === "Sat"){
//         alert("It is a fun day ")
// }else{
//         alert("Go to work ")
// }
//if(monthNames[pMonth]=== "Saturdat")
//      Q5 
//  let now  = new Date();
// let day = now.getDay();
//  alert();
//      Q6 
//let date = new Date();
// alert( date)
// let min = date.getMinutes();
// alert(min);
//alert(new Date().getHours() * 60 + new Date().getMinutes());
//              Q7
// let now = new Date();
// let hours = now.getHours();

// if (hours < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }
//              Q8 
// let age = +prompt("Enter your age: ");
// let currentYear = new Date().getFullYear(); // 2025
// let birthYear = currentYear - age;           // 2025 - 20 = 2005
// alert(`You were born in ${birthYear}`); 
//              Q9 
// const start2015 = new Date('2015-01-01');
// const seconds = Math.floor((new Date() - start2015) / 1000);
// document.write(seconds + " seconds since 2015 began");

                //Q14 
  // Get input
// const name = prompt("Enter customer name:");
// const units = prompt("Enter units consumed:");
// const rate = prompt("Enter charge per unit:");
// // Calculate amounts
// const net = (units * rate).toFixed(2);
// const surcharge = (net * 0.1).toFixed(2);
// const gross = (Number(net) + Number(surcharge)).toFixed(2);
//              q11
// let now = new Date();
// let currentHour = now.getHours();
// alert("Current hour: " + currentHour);
// now.setHours(currentHour + 1);
// alert("Time one hour ahead: " + now);


/////////  Assignment JS 07 ( ENDS ) ////////////////////
/////////  Quesytion related function  ( STARTS ) ////////////////////

//                    Question 3

//               let  num1 = +prompt("Enter number 1 ")
//                 let num2 = +prompt("Enter number 2 ")
// function checkNum(num1 , num2){
//                 if (num1 > num2){
//               alert(num1 +" is greater")
//                 return  ;
//                 }
//                 else if(num1 < num2){
//               alert(num2 +" is greater")
//                 return  ;

//                 }
//         }
//         checkNum(num1,num2);
        //      Question 4

// let sentence = prompt("Enter a sentence ").toLowerCase()              ;
// let count = 0 ;
// function checkVowels(){
// var arr = ["a", "e", "i", "o", "u"]
// for(let i=0 ; i<=sentence.length ; i++){
//     let letter = sentence[i];
//     if(letter === "a" || letter ==="e" || letter ==="i" || letter === "o" || letter === "u"){
//         count++;
//     }
// }
// }
// checkVowels(sentence)
//              Question 2

// let word = prompt("Enter a word ")
//  let reversed = word.split('').reverse()//.join();
// alert(reversed);

//              Question 1
// let arr = [1,2,3,45,5];
// let sum = 0 ;
// for (i=0 ; i<arr.length ; i++){
//         sum += arr[i];
// }
// console.log(sum);
//              Question 5 (This is not correct )
// let arr = [1,2,3,45,5];
// let sum = 0 ;
// let duplicate = arr ;
// for (i=0 ; i<arr.length ; i++){
//         if(duplicate == arr[i]){
//                 duplicate -= arr[i];
//         }
        
// }
// console.log(duplicate);
//              Question 6

// let word = prompt("Enter a word ").toLowerCase();
// word = word.slice(0,1).toUpperCase() + word.slice(1);
// alert(word);




/////////  Quesytion related function  ( ENDS ) ////////////////////