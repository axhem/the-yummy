# README #

Super simple ecommerce for ordering pizza 


### What is this repository for? ###

* Pizza online odering
* 1.0.0


### How do I get set up? ###

```
npm i -g @angular/cli@7.3.1
git clone https://github.com/axhem/yummy.git
cd yummy
npm i
ng serve
```
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test`  in the root to execute the unit tests via [Karma](https://karma-runner.github.io).
#### Minor  Unit testing
1. Convert Pipe
    * Convert an instance
1. Category Page
    * test shopping cart, add a duplicate item should increment the quantity for that item.
    * test shopping cart, add a multiple products item should increment the quantity for that item.
2. Product Page, test add to cart button
    * Add duplicate item.
    * Add first item.
    * When quantity is null.
3. Cart Page
    * change quantity.
    * remove item.

## Running end-to-end tests

