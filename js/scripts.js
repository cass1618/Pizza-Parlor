//UTILITY LOGIC
function sizeToPrice(size) {
  switch (size) {
    case ("SMALL"):
      return 11.50;
    case ("MEDIUM"):
      return 14.00;
    case ("LARGE"):
      return 16.50;
    default:
      return "error size to price"
  }
}

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

//BUSINESS LOGIC
function Pizza () {
  this.toppings = [];
  this.size = "SMALL";
  this.price =  currency.format(11.50);
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

Pizza.prototype.displayToppings = function() {
  let toppingList = "";
  this.toppings.forEach(function(topping) {
    toppingList = (toppingList + "<li>" + topping  + "</\li>");
  })
  return toppingList;
}

function Cart () {
  this.items = {};
  this.currentId = 0;
  this.numItems = 0;
}

Cart.prototype.addItem = function(item) {
  item.id = this.assignId();
  this.items[item.id] = item;
  this.numItems++;
}

Cart.prototype.assignId = function() {
  this.currentId ++;
  return this.currentId;
}

Cart.prototype.getById = function(id) {
  if (this.items[id] != undefined) {
    return this.items[id];
  }
  else {
    return false;
  }
}

//UI LOGIC
let pizza = new Pizza();
let cart = new Cart();
let i = 0;

function modifySize() {
  pizza.size = ($("#size").val());
  pizza.calculatePrice();
  $(".total").html(`COST: ${currency.format(pizza.price)}`); 
}

function update(value, id) {
  if ($(('#')+id).is(':checked')) {
    pizza.addTopping(value);
  } 
  else {
    pizza.removeTopping(value);
  }
  pizza.calculatePrice();
  console.log(pizza);
  $(".total").html(`COST: ${currency.format(pizza.price)}`);
}

$(document).ready(function() {
  $(".total").html(`COST: ${pizza.price}`);  

  $("form").submit(function(event) {
    event.preventDefault();

    cart.addItem(pizza);
    console.log(pizza);
    let numItems = cart.numItems;
    let currentDiv = "item1";

    for (let i=2; i <= numItems+1; i++) {
      currentDiv = "item"+i;
    }
   
    $(".cartItems").append("<div id="+currentDiv+">"+currentDiv+"</div>");
    $("#"+currentDiv).html(`${pizza.size}<br>
    Toppings: ${pizza.displayToppings()}
    ${pizza.price}`);

    $("#size").val("SMALL");

    for (let j = 1; j <= 9; j++) {
    $("#check"+j).prop("checked", false);
    }
    pizza = new Pizza();
  });
});