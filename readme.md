# Pizza Parlor

## Description

This website allows a user to select which toppings and size of pizza they would like.  It then calculates the price based on selections and adds to cart when submit button is clicked.

## Technologies Used

* HTML
* CSS
* Javscript
* JQuery

## Setup Instructions

To download project and run locally:
1. Clone the repository from GitHub
1. Open the Pizza-parlor folder
1. Open "index.html" using your web browser
 
## Testing

Describe: `Pizza.prototype.addTopping(topping)`

Test: When the addTopping method is called on a specific pizza object, the argument should be pushed to the toppings array for that pizza.

Code: 
```js
let pizza = new Pizza();
pizza.addTopping("chick'n");
```
Expected Output: 
```js
Pizza { toppings: [ 'cheese' ], size: '', price: 0 };
```
Describe: `Pizza.prototype.removeTopping(topping)`

Test: When the removeTopping method is called on a specific pizza object, the argument should be removed from that pizza's toppings array.

Code: 
```js
pizza = Pizza { toppings: [ 'cheese' , 'pepperoni' ], size: 'small', price: 0 };
pizza.removeTopping('cheese');
```
Expected Output: 
```js
pizza = Pizza { toppings: [ 'peperoni' ], size: 'small', price: 0 };
```

Test: When the removeTopping method is called with an argument that is not included in the pizza's topping array, the function should return false and the pizza object should remain unchanged.

Code: 
```js
pizza = Pizza { toppings: [ 'pepperoni' ], size: 'small', price: 0 };
pizza.removeTopping('cheese');
```

Expected Output: 
```js
false;
pizza = Pizza { toppings: [ 'peperoni' ], size: 'small', price: 0 };
```

Describe: `Pizza.prototype.calculatePrice()`

Test: When the calculatePrice method is called on a pizza object, the price attribute of that pizza should be set according to size and number of toppings.

Code: 
```js
pizza = Pizza { toppings: [ 'cheese' ], size: 'small', price: 0 };
pizza.calculatePrice();
```
Expected Output: 
```js
pizza = Pizza { toppings: [ 'cheese' ], size: 'small', price: 12.25 };
```

Describe: `Cart.prototype.addItem()`

Test: When the addItem method is called on a cart object, the object should be added to the cart.

Code: 
```js
cart = Cart { items: {}, currentId: 0 };
pizza = Pizza { toppings: [], size: 'small', price: 0 };
cart.addItem(pizza);
```

Expected Output: 
```js
cart = Cart { items: { '1': Pizza { toppings: [], size: 'small', price: 0, id: 1 } }, currentId: 1 };
```
Describe: `function sizeToPrice(size)`

Test: When this function is called on a size string, the price of that size should be returned.

Code: 
```js
sizeToPrice("small");
```

Expected Output: `11.50`

Describe: `Cart.prototype.getById(id)`

Test: When this function is called on a cart with id argument, the item with that id should be returned.

Code: 
```js
cart = Cart { items: { '1': Pizza { toppings: [], size: 'small', price: '$11.50', id: 1 } };
cart.getById(1);
```
Expected Output: 
```js
Pizza { toppings: [], size: 'small', price: '$11.50', id: 1 };
```
## Known bugs

No known bugs.

## Licence

[MIT](https://opensource.org/licenses/MIT)

Copywrite (c) Cassandra Copp 2021.

## Contact Information

[github.com/cass1618](http://github.com/cass1618)