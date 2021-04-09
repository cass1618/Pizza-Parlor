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
function Pizza (size) {
  this.toppings = [];
  this.size = size;
  this.price = 0;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.calculatePrice = function() {
  let numToppings = this.toppings.length;
  let basePrice = sizeToPrice(this.size);
  this.price = basePrice + (numToppings * .75); 
}

//UI LOGIC

// radio for pickup or delivery

// fields for Name, address, phone number

// checkboxes for toppings
// Dropdown for size