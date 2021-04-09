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
Code: let pizza1 = new Pizza();
      pizza1.addTopping("chick'n");
Expected Output: Pizza { toppings: [ 'cheese' ], size: '', price: 0 }

Describe: Pizza.prototype.calculatePrice()
Test: When the calculatePrice method is called on a pizza object, the price attribute of that pizza should be set according to size and number of toppings.
Code: pizza1 = Pizza { toppings: [ 'cheese' ], size: 'small', price: 0 }
      pizza1.calculatePrice();
Expected Output: pizza1 = Pizza { toppings: [ 'cheese' ], size: 'small', price: 12.25 }


## Known bugs

No known bugs.

## Licence

[MIT](https://opensource.org/licenses/MIT)

Copywrite (c) Cassandra Copp 2021.

## Contact Information

[github.com/cass1618](http://github.com/cass1618)