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

Cart.prototype.displayPizza = function(id) {
  let currentPizza = this.getById(id);
  currentPizza.size
  currentPizza.displayToppings();
  currentPizza.price;
}

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};

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
  $(".total").html(`COST: ${currency.format(pizza.price)}`);
}

$(document).ready(function() {
  $(".total").html(`COST: ${pizza.price}`);  
  $("form").submit(function(event) {
    event.preventDefault();
    cart.addItem(pizza);

    let numItems = cart.numItems;
    for (i=1; i <= numItems; i++) {
      let id = i;
      let currentPizza = cart.getById(i);
      $(".cart#"+i).html(`${currentPizza.size}<br>
      Toppings: ${currentPizza.displayToppings()}<br>
      ${currentPizza.price}`) 
    }
  });
});