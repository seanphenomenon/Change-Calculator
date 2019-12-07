// Write your JavaScript here


//To do: What happens after calculate change button is clicked.
function handleClickEvent(){

    var amountReceived = document.getElementById("amount-received").value;
    var amountDue = document.getElementById("amount-due").value;  
    var calculateChange = amountReceived - amountDue;
    console.log(calculateChange)
   
// Write the code to display the messages shown for each change amount due. 

if (amountReceived == amountDue){
     
    alert('No Change Needed.');
    
} else if (amountReceived < amountDue){
     
    alert ('Need More Money');
} else {
   
// Targeting dollar bills Only 
var dollars = Math.floor(calculateChange);
document.getElementById('dollars-output').innerHTML = dollars;


// figure out how to seperate the change from whole number (decimal value) 
var change = calculateChange % 1;
    console.log(change)


// Targeting quarters only 
var quarters = Math.floor(change/.25);
  
document.getElementById('quarters-output').innerHTML = quarters;
change = change % .25;
 console.log(change)

// Targeting dimes only 
var dimes = Math.floor(change/.10);
change = change % .10;
document.getElementById('dimes-output').innerHTML = dimes;
console.log(change)


// Targeting nickels only
var nickels = Math.floor(change/.05);
change = change % .05;
document.getElementById('nickels-output').innerHTML = nickels;
console.log(nickels)

// Targeting pennies only 
var pennies = Math.round(change/0.01);
change = change % .01;
document.getElementById('pennies-output').innerHTML = pennies;
console.log(pennies)

}
}
