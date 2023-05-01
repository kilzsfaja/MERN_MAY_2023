// arrow functions
const sayHello = function(someName) {
    console.log("hello", this)
}
sayHello();

const sayHelloArrow = (someName) => {
    console.log("hello", this)
    return "hello " + someName
}

sayHelloArrow("john")

// console.log("what is this?", this)

// const shortArrow = (someName) => "hello " + someName;

// ternary (3 parts)

age = 20
if(age >= 21){
    return "yes"
} else {
    return "no"
}

age >= 21 ? "yes" : "no";