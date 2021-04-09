# Pizza Parlor

### By Cassandra Copp

## Description

This website allows a user to select what toppings and size of pizza they would like.  It also calculates the prices based on selections.

## Technologies Used

* HTML
* CSS
* Javscript
* JQuery

## Setup Instructions

[Click here to access live web page](https://cass1618.github.io/Pizza-Parlor/)

To download project and run locally:
1. Clone the repository from GitHub
1. Open the Pizza-parlor folder
1. Open "index.html" using your web browser

## TESTING

Describe: Pizza.prototype.addTopping(topping)
Test: When the addTopping method is called on a specific pizza object, the argument should be pushed to the toppings array for that pizza.
Code: let pizza = new Pizza();
      pizza.addTopping("chick'n");
Expected Output: Pizza { toppings: [ 'cheese' ], size: '', price: 0 }

Describe: Pizza.prototype.removeTopping(topping)
Test: When the removeTopping method is called on a specific pizza object, the argument should be removed from that pizza's toppings array.
Code: pizza = Pizza { toppings: [ 'cheese' , 'pepperoni' ], size: 'small', price: 0 }
      pizza.removeTopping('cheese');
Expected Output: pizza = Pizza { toppings: [ 'peperoni' ], size: 'small', price: 0 }

Test: When the removeTopping method is called with an argument that is not included in the pizza's topping array, the function should return false and the pizza object should remain unchanged.
Code: pizza = Pizza { toppings: [ 'pepperoni' ], size: 'small', price: 0 }
      pizza.removeTopping('cheese');
Expected Output: false
                 pizza = Pizza { toppings: [ 'peperoni' ], size: 'small', price: 0 }


Describe: Pizza.prototype.calculatePrice()
Test: When the calculatePrice method is called on a pizza object, the price attribute of that pizza should be set according to size and number of toppings.
Code: pizza = Pizza { toppings: [ 'cheese' ], size: 'small', price: 0 }
      pizza1.calculatePrice();
Expected Output: pizza = Pizza { toppings: [ 'cheese' ], size: 'small', price: 12.25 }

Describe: Cart.prototype.addItem()
Test: When the addItem method is called on a cart object, the object should be added to the cart.
Code: cart = Cart { items: {}, currentId: 0 }
      pizza = Pizza { toppings: [], size: 'small', price: 0 }
      cart.addItem(pizza);
Expected Output: cart = Cart { items: { '1': Pizza { toppings: [], size: 'small', price: 0, id: 1 } }, currentId: 1 }


## Known bugs

No known bugs.

## Licence

[MIT](https://opensource.org/licenses/MIT)

Copywrite (c) Cassandra Copp 2021.

## Contact Information

[github.com/cass1618](http://github.com/cass1618)