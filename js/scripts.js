//UTILITY LOGIC
function sizeToPrice(size) {
  switch (size) {
    case ("small"):
      return 11.50;
    case ("medium"):
      return 14.00;
    case ("large"):
      return 16.50;
    default:
      return "error size to price"
  }
}

//BUSINESS LOGIC
function Pizza (size, toppings) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

function Pizza (size) {
  this.toppings = [];
  this.size = size;
  this.price = 0;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.removeTopping = function(topping) {
  if (this.toppings.indexOf(topping) >= 0) {
    this.toppings.splice((this.toppings.indexOf(topping)),1);
  } else {
    return false;
  }
}

Pizza.prototype.calculatePrice = function() {
  let numToppings = this.toppings.length;
  let basePrice = sizeToPrice(this.size);
  this.price = basePrice + (numToppings * .75); 
}

function Cart () {
  this.items = {};
  this.currentId = 0;
}

Cart.prototype.addItem = function(item) {
  item.id = this.assignId();
  this.items[item.id] = item;
}

Cart.prototype.assignId = function() {
  this.currentId ++;
  return this.currentId;
}
//UI LOGIC

// radio for pickup or delivery

// fields for Name, address, phone number

function modifySize() {
  pizza.size = ($("#size").val());
  pizza.calculatePrice();
  console.log(pizza);
}

let pizza = new Pizza("small");
let cart = new Cart();

function update(value, id) {
    if ($(('#')+id).is(':checked')) {
      pizza.addTopping(value);
     } 
     else {
       pizza.removeTopping(value);
     }
  pizza.calculatePrice();
  console.log(pizza);
//})
}

$(document).ready(function() {
  $("form#formA").submit(function(event) {
    event.preventDefault();



  });
});