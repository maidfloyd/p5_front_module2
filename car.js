/*Describe a car using a JS object. It must contain
- model
- price
- owner
- description

Build a function that takes a car object as an argument and return a formatted string as follows:
<Model> costs <price> and is owned by <owner>


Build a function that takes an array of car objects and returns a new array with each entry having the price increased by a given amount

Compute the total price for an array of cars

Build a function that takes an array of car objects and returns a single string having the following format:
"<car_index_1>. <model_1>: <description_1>
<car_index_2>. <model_2>: <description_2>"
*/

"use strict";
function Cars(model, price, owner, description) {
  this.model = model;
  this.price = price;
  this.owner = owner;
  this.description = description;
}

var car1 = new Cars('Lada Niva', 50000, 'Jason', 'vintage');
var car2 = new Cars('Mitsubishi Lancer', 90000, 'John', 'mint condition');
var car3 = new Cars('Tesla Model 3', 150000, 'Jim', 'exquisite');

//First Task

function advertise(obj) {
  console.log(`${obj.model} costs ${obj.price} and is owned by ${obj.owner}.`);
}

advertise(car1);
advertise(car2);
advertise(car3);

//Second Task

var myCollection = [car1, car2, car3];

function increasePrice (arr, ammount) {
  var newPrices = [];
  var price = 0;
  for (var i = 0; i < arr.length; i++) {
    price = arr[i].price + ammount;
    newPrices.push(price);
  }
  return newPrices;
}

function totalPrice (arr) {
  var total = arr.reduce(function (acc, cur) {
    return acc + cur.price; 
  }, 0);
  return total;
}

 console.log(increasePrice(myCollection, 999));
 console.log(totalPrice(myCollection));

 //Third Task

 function flatten (arr) {
   var myString = ``;
  for (var i = 0; i < arr.length; i++) {
    myString = myString + `<${i+1}>. <${arr[i].model}>: <${arr[i].description}> `;
  }
  return myString;
 }

console.log(flatten(myCollection));

//DOM

var carr1 = document.getElementById('carr1');
carr1.addEventListener('click', showDetails);

function showDetails() {
  console.log(`clicked`);
}