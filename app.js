//        37/2025
//          arrow fubction 4 july 2025
// let calAge = (birthYear) => 2025 - birthYear;
// let age = calAge(2004);
// console.log(age);

//         count = 0;;
// function CountNumber(){
//   for(let i=0 ; i<5 ; i++){
//         count++
//         console.log(i, count);

//   }
// }
// CountNumber();
// CountNumber();

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
//              Q1
//  let num = +prompt("Enter a number:");
//   if (num > 0) {
//   console.log("Round off value ");

//     num = Math.round(num);
//     console.log("Rounded:", num);

//    console.log("Ceiling  value ");

//     num = Math.ceil(num);
//     console.log("Ceiling:", num);

//      console.log("Floor  value ");

//      num = Math.floor(num);
//     console.log("Floor:", num);
// }
// console.log(num);
//              Question 2

// let num = +prompt("Enter a number:");
//   if (num < 0) {
//   console.log("Round off value ");

//     num = Math.round(num);
//     console.log("Rounded:", num);
//   }
//   else{
//         alert("Value should be less than 0" )
// }
//              Question 3
//              Question 4

//  let  num = Math.random();
// console.log("Random Dice :", Math.round((num * 6 + 1 )));

//              Question 5

//  let toss = Math.floor(Math.random() * 2); // 0 or 1
// if (toss === 0) {
//     console.log("Toss: Heads");
// } else {
//     console.log("Toss: Tails");
// }

//              Question  6

//  let  num = Math.floor(Math.random() * 100 ) + 1;
//  console.log("rand0m number : " , num);

//              Question  7

//  let weight = prompt("Enter your weight :")
// weight = Math.round(+weight);
// alert(weight+"kg")

//              Question  8

// let  num = Math.floor(Math.random() * 10 ) + 1;
//  console.log("rand0m number : " , num);
//  let guessNo = prompt(" Guess the Ramdom Number : ")
//  if(guessNo == num){
//         alert("You guess correct ");
//  }else{
//         alert("Better luck next time ");
//  }

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
/////////  Question related function  ( STARTS ) ////////////////////

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

/////////  Question related function  ( ENDS ) ////////////////////

///////////////  Assignment JS 08 ( StartS ) ////////////////////

//                      Question 2
// function greet(){

//   let fname = prompt("Enter your  First name ");
//    let Lname = prompt("Enter your  Last name ");
//    alert(fname+" "+Lname)

// }
// greet();

//                      Question 3

// function addNumber(){
//         let a = +prompt("Enter 1 number ");
//         let b = +prompt("Enter 2 number ");
//         return a + b ;

// }
// let result = addNumber();
// alert(result);

//                      Question 4

// function calculate(num1, num2, opt){
//     switch (opt) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             return num1 / num2;
//         default:
//             return "Invalid operator";
//     }
// }
// let num1 = +prompt("Enter the first number:");
// let num2 = +prompt("Enter the second number:");
// let opt = prompt("Enter operator (+, -, *, /):");

// let result = calculate(num1, num2, opt);
// alert("Result: " + result);

//                      Question 5

// function sqr(number) {
//     return number * number;
// }
// let result = sqr(6);
// alert("Square is: " + result);

//                      Question 6

// function calculateFactorial() {
//   let num = +prompt("Enter a number ");
//   let fact = 1;
//   for (let i = num; i >= 1; i--) {
//     fact = fact * i;
//   }
//   console.log("The Factorial is " + fact);
// }
// calculateFactorial();

//                      Question 7

// let fNum = +prompt("Enter Starting number :");
// let lNum = +prompt("Enter Ending  number :");
// let result = 0;
// function dispalyCounting() {
//   if (fNum > lNum) {
//     for (let i = fNum; i >= Num; i++) {
//       console.log(i);
//     }
//   } else {
//     for (let i = fNum; i <= lNum; i++) {
//       console.log(i);
//     }
//   }
// }
// dispalyCounting();

//                      Question 8
// /                      Question 9

/////////  Assignment JS 08 ( ENDS ) ////////////////////
// const x = 23;
// console.log();

/////////////////////////// Password Generator ///////////////////////////////
// let passwordHolder = document.getElementById("password");
// let passLength = 12;

// let upperCase = "ASDFGHJKLQWERTYUIOPZXCVBNM";
// let lowerCase = "asdfghjklqwertyuiop";
// let number = "1234567890";
// let symbol = "~!@#$%^&*()_-{}|:<>?";

// let allChar = upperCase + lowerCase + number + symbol;

// function generatePassword() {
//   let password = "";
//   password += upperCase[Math.floor(Math.random() * upperCase.length)];
//   password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
//   password += number[Math.floor(Math.random() * number.length)];
//   password += symbol[Math.floor(Math.random() * symbol.length)];

//   while (password.length < passLength) {
//     password += allChar[Math.floor(Math.random() * allChar.length)];
//   }

//   passwordHolder.value = password;
// }
/////////////////////////// To do list  ///////////////////////////////

// let list = document.getElementById("list");

// function AddTodo() {
//   let todo = document.getElementById("todo");

//   if (todo.value.trim() === "") return;

//   list.innerHTML += `<li>
//     <input type="text" value="${todo.value}" disabled />
//     <button class="delete-btn" onclick="deleteTodo(event)">Delete</button>
//     <button class="edit-btn" onclick="editTodo(event)">Edit</button>
//   </li>`;

//   todo.value = "";
// }

// function addTodoEnter(event) {
//   if (event.key === "Enter") {
//     AddTodo();
//   }
// }

// function deleteTodo(event) {
//   event.target.parentNode.remove();
// }

// function editTodo(event) {
//   let input = event.target.parentNode.querySelector("input");
//   input.disabled = false;
//   input.focus();

//   event.target.innerHTML = "Update";
//   event.target.classList.remove("edit-btn");
//   event.target.classList.add("update-btn");
//   event.target.setAttribute("onclick", "updateTodo(event)");
// }

// function updateTodo(event) {
//   let input = event.target.parentNode.querySelector("input");
//   input.disabled = true;

//   event.target.innerHTML = "Edit";
//   event.target.classList.remove("update-btn");
//   event.target.classList.add("edit-btn");
//   event.target.setAttribute("onclick", "editTodo(event)");
// }

// function deleteAll() {
//   list.innerHTML = "";
// }
/////////////////////////////////// POSTING APP  /////////////////////
// function submitPost() {
//   console.log("submitPost function called");

//   const input = document.getElementById("postInput");
//   const container = document.getElementById("postsContainer");

//   if (!input.value.trim()) {
//     alert("Please write something before posting!");
//     return;
//   }

//   const post = document.createElement("div");
//   post.className = "post";

//   post.innerHTML = `
//         <div class="post-content">${input.value}</div>
//         <div class="comment-section">
//           <input type="text" placeholder="Your name (optional)" class="comment-name" />
//           <input type="text" placeholder="Add a comment..." class="comment-input" />
//           <button class="comment-btn" onclick="addComment(this)">Comment</button>
//           <div class="comments-container"></div>
//         </div>
//       `;

//   container.appendChild(post);
//   input.value = "";

//   console.log("Post created successfully");
// }

// function addComment(button) {
//   const commentSection = button.parentElement;
//   const nameInput = commentSection.querySelector(".comment-name");
//   const commentInput = commentSection.querySelector(".comment-input");
//   const commentsContainer = commentSection.querySelector(".comments-container");

//   const commentText = commentInput.value.trim();

//   if (!commentText) {
//     alert("Please write a comment!");
//     return;
//   }

//   const name = nameInput.value.trim() || "Anonymous";

//   const comment = document.createElement("div");
//   comment.className = "comment";
//   comment.innerHTML = `<strong>${name}:</strong> ${commentText}`;

//   commentsContainer.appendChild(comment);

//   commentInput.value = "";
//   nameInput.value = "";
// }

// function deleteAllPosts() {
//   alert("Delete function called!"); // Test if function is even called

//   const container = document.getElementById("postsContainer");

//   // Just delete without any checks for now
//   container.innerHTML = "";

//   alert("Posts should be deleted now!");
// }
//////////////////// Sign form ////////////////////
function showSignUp() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "flex";
}

// Show Login Form
function showLogin() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "flex";
}

// Login Form Validation
function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email.trim()) {
    alert("Please enter your email!");
    return false;
  }

  if (!password.trim()) {
    alert("Please enter your password!");
    return false;
  }

  alert(`Login successful!\nEmail: ${email}`);
  return false; // Prevent actual form submission for demo
}

// Sign Up Form Validation
function signupUser() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const city = document.getElementById("cities").value;
  const gender = document.querySelector('input[name="gender"]:checked');

  // Check if all fields are filled
  if (!fullName.trim()) {
    alert("Please enter your full name!");
    return false;
  }

  if (!email.trim()) {
    alert("Please enter your email!");
    return false;
  }

  if (!password.trim()) {
    alert("Please enter your password!");
    return false;
  }

  if (!city) {
    alert("Please select a city!");
    return false;
  }

  if (!gender) {
    alert("Please select your gender!");
    return false;
  }

  alert(
    `Account created successfully!\nName: ${fullName}\nEmail: ${email}\nCity: ${city}\nGender: ${gender.value}`
  );

  // After successful signup, show login form
  showLogin();
  return false; // Prevent actual form submission for demo
}
