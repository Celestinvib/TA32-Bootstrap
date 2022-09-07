
let input = document.getElementById('input');

let num1 ="";
let op = "";
let history = "";
let r = "";

/*
Adds a number/carac to the input element 
*/
function add(value) {
   input.value != "" ? input.value += value : input.value = value;
   if(r != "") { 
      r = "";
      clearHistory();
   }
}

/*
Manages when the user clicks an operation button
*/
function makeMove(passedOp) {
   if(input.value != "") {
           
      if(num1 != ""){ 
         num1 = getMathValue(num1+op+input.value);
      }else {
         num1 = input.value;
      }

      op = passedOp;
      input.value="";
      addHistory(num1+op)
      clearCurrentInput();
   }
}

/*
Manages the suare root op 
*/
function sRoot(){
   if(input.value != "") {
      
      input.value = Math.sqrt(input.value);
      if(history == "") {
         addHistory("sqr("+input.value+")")
      }else {
         addHistory(history+" sqr("+input.value+")") 
      }
   }
}

/*
  Calc  1 / input current value
*/
function oneSplit() {
   if(input.value != "") {
      input.value = 1 / input.value;
   }
}

/*
  Change the value of the input from negative to positive and vice versa
*/
function changeValue() {
   if(input.value != "") {
      if(input.value.charAt(0) == '-') {
         input.value = input.value.slice(1,  input.value.length);     
      }else{
         input.value = '-'+input.value;
      }
   }
}

/*
  Resolve
*/
function resolve() {
   if(input.value != "") {
         r = getMathValue(num1+op+input.value)
         addHistory(r);
         clearCurrentInput();
         num1 = "";
   }
}

/*
Clear the current value of the input element 
*/
function clearCurrentInput() {
   input.value = "";
}

/*
Clear all the inputs & the history
*/
function clearInput() {
   history = "";
   num1 = "";
   clearHistory();
   clearCurrentInput();
}

/*
Delete the las value of the current input
*/
function deleteValue() {
   if(input.value != "") {
      input.value = input.value.slice(0, -1);
   }
}

/*
Adds a number to the history label
*/
function addHistory(x) {
   document.getElementById('history').innerHTML = x;
   history = x; 
}

/*
Clear to the history label
*/
function clearHistory() {
   document.getElementById('history').innerHTML = ""; 
   history = "";
  }

/*
Gets the Math value of a operation string
*/
function getMathValue(str){
   return new Function('return ' + str)();
 }

