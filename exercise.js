/*
*************************CODING TASK*********************************
1. Create variables to represent scores of exams for Matt and Simon and set values   80 and 45;
2. Create variable to set the lower limit for passing an exam and assign to it value as 51;
3. Write the condition in if statement, which will check if both students have passed an exam and log 
   the result in console;
4. Use else if statement in order to check if one of the students has passed an exam and log the result 
   in console;
5. Use else statement in order to display in console that both students have failed;
6. In case of passing the exam by one of the students, find out which one was that and display in console 
   as an additional information the student name and his points
7. Test (console log it) all the possible cases (a. both students passed; b. Matt passed and Simon failed; c. Simon passed and 
  Matt failed; d. both students failed).
*/

// SOLUTION:
// 1
let scoreOfMatt = 80;
let scoreOfSimon = 45;

// 2
const score = x;

if (x>=51){
    console.log("You passed an exam!");
} else {
    console.log("You failed it.");
}

// 3-7
if (scoreOfMatt >= 51 && scoreOfSimon >= 51){
    console.log("Both students passed!");
}else if(scoreOfMatt>=51 && scoreOfSimon < 51){
    console.log("Matt's score was " + ${scoreOfMatt} + " so passed and Simon's score was " + ${scoreOfSimon} " so failed.")
}else if(scoreOfMatt<51 && scoreOfSimon >= 51){
    console.log("Simon's score was " + ${scoreOfSimon} + " so passed and Matt's score was " + ${scoreOfMatt} + " so passed.")
}else{
    console.log("Both failed.")
}



