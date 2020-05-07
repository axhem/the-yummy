# README #

Super simple eccomerece for ordering pizza 


### What is this repository for? ###

* Pizza online odering
* 1.0.0


### How do I get set up? ###

```
git clone https://axhemshahaj@bitbucket.org/axhemshahaj/yummy.git
cd yummy
npm i
```
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
#### Units to be tested
1. Category Page
    * test shopping cart, add a duplicate item should increment the quantity.
2. Product Page, test add to cart button
    * Add first item.
    * Testing when quantity is null or empty.
    * Add duplicate item.
3. Cart Page
    * change quantity.
    * remove item.
## Running end-to-end tests

