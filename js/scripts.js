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

//UI LOGIC

// radio for pickup or delivery

// fields for Name, address, phone number

function logPrice() {
  console.log($("#size").val());
}

let pizza = new Pizza("small");

function update() {
  if (":checkbox:checked") {
    pizza.addTopping("#toppings.val()");
  }
  pizza.calculatePrice();
  console.log(pizza);
}

$(document).ready(function() {

  
  
    $(":checkbox:checked").each(function(i) {
    toppings[i] = $(this).val();
    console.log("check box");
  });

  $(".checkboxes").bind("click", pizza.addTopping($(this).val()), pizza.calculatePrice());

  



  // $("form").submit(function(event) {
  // event.preventDefault();

    
  // const size = $("#size").val();
  // console.log(size);

  // let toppings = [];
  // $(":checkbox:checked").each(function(i) {
  //   toppings[i] = $(this).val();
  //   console.log("check box");
  // });
  // console.log("toppings: "+toppings);

  // let pizza = new Pizza(size, toppings);
  // pizza.calculatePrice();
  // console.log("pizza!" ,pizza)


  // });
});