/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. explicit binding - uses apply call and bind- arguments
* 2. implicit binding - 
* 3. Global binding - uses this for console obj and window
* 4. New binding - for constructor created object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
}
sayName("D'Artagnan");
// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function (name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObj.sayHello('Ryan');
// Principle 3

// code example for New Binding
unction CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function () {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();
// Principle 4

// code example for Explicit Binding
function Person(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
    this.speak = function () {
        return `Hello, my name is ${this.name}`;
    };
}
const fred = new Person({
    age: 35,
    name: 'Fred',
    homeTown: 'Bedrock'
});