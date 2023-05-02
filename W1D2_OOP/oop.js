// const myBook = {
//     title: "JS is the best!",
//     pages: 9001,
//     author: "Bob",
//     publishYear: 2023
// }

// const book2 = {
//     title: "JS is for front end and back end!",
//     pages: 900,
//     author: "alice",
//     publishYear: 2022
// }

// console.log(myBook, book2)
// class?
// objects that share the same attributes
// blueprint - information on what an object should be

// create a class
class Book{
    // defaults
    constructor(titleParam, pages, author, publishYear){
        // console.log(this)
        this.title = titleParam;
        this.bookPages = pages;
        this.author = author;
        this.year = publishYear;
    }
}

// instantiate a class?
const myCoolNewBook = new Book("bob's first book", 100, "Bob", 1999)

myCoolNewBook.newAttribute = true;
// console.log(myCoolNewBook)

// ===================
class Car{
    constructor(make, model, year, color, wheels=4){
        // ATTRIBUTES - WHAT A CAR HAS
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.wheels = wheels;
        this.miles = 0;
    }
    // METHODS - WHAT A CAR CAN DO
    drive(){
        this.miles += 10;
        console.log(`${this.make} has driven ${this.miles} miles`)
        // return this.miles
        return this
    }

    honk(otherCar){
        if (otherCar instanceof SuperCar) {
            console.log(`you made the ${otherCar.make} rev up!`)
        } else {
            console.log(`${this.make} honks at ${otherCar.make}`)
        }
    }
    // honk(otherCar){
    //     otherCar instanceof SuperCar ? console.log(`you made the ${otherCar.make} rev up!`) : console.log(`${this.make} honks at ${otherCar.make}`)
    // }
}
const honda = new Car("Honda", "Civic", 2006, "blue", 8)
const toyota = new Car("Toyota", "supra", 2001, "black")
// console.log(honda)
// honda.drive().drive().drive()

// toyota.drive()

// console.log(honda.miles)


class SuperCar extends Car{
    constructor(make, model, color, muffler){
        super(make, model, 2023, color)
        this.muffler = muffler
    }

    // polymophism
    drive(){
        this.miles += 50
        console.log(`${this.make} drove ${this.miles} miles`)
    }

}

const mclaren = new SuperCar("Mclaren", "P1", "matte black", true)
// console.log(mclaren)

// mclaren.drive()
// mclaren.drive()
// mclaren.drive()
// mclaren.drive()

honda.honk(mclaren)
honda.honk(toyota)
mclaren.honk(toyota)