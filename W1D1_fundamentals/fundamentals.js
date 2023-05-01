// Scope
// var name = "bob";

// function sayHi() {
//     var name = "alice";
//     console.log(name)
// }
// console.log("function returns", sayHi())
// console.log(name);
// ---------- HOISTING

// console.log(x)
// let x = "bob" // let acts as an anchor 
// let and const

const animals = ["zebra", "elephant", "lion"]
animals[0] = "panda"
console.log(animals)

// var ninja = new person()

// === DESTRUCTURING ====
const firstName = "john";
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const ninja = {...person};
person.firstName = "alice"
console.log(ninja)


const {addresses: [,{secondAddress}]} = person;
console.log(secondAddress)

const { username, firstName: personFirstName } = person;
console.log(personFirstName, username)

// const personName = person.firstName
// const personEmail = person.email
// console.log(personName, personEmail)

//                0          1      2      3         4
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// var secondElement = animals[1];

const [, , somethingElse] = animals

console.log(somethingElse)





// var x; // undefined
// console.log(x) 
// x = "bob"

// hello("bob")

function hello(x) {
    console.log("hello " + x);
    console.log(`hello ${x}`);
    // return "hello " + x;
}



// a function is equal to its return

// ---------- REST / SPREAD

const a = [10, 20, 30]
const c = a
const b = [...a];

a.push(100000)
b.push(99999)

console.log(a);
console.log(b);