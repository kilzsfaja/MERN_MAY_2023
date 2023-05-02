// Functional programming

// const hiThere = function() {
//     console.log("hi there after 3 seconds")
// }

// setTimeout(hiThere, 3000)

// setTimeout(() => {
//     console.log("hello")
// }, 1000)

// --------------------
//                 0           1           2        3           4        5
const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"];

const awesomeAnimals = animals.map((oneElement, idx) => {
    return `${idx+1} - ${oneElement} is awesome`
})

// const succinctNewArray = animals.map( oneAnimal => `${oneAnimal} is awesome`)

// console.log(succinctNewArray)
// console.log(awesomeAnimals)
// console.log(animals)

// ======= FILTER ===========

const filteredAnimals = animals.filter((eachOneAnimal)=>{
    if(eachOneAnimal.length <= 5){
        return true
    }else{
        return false
    }
})

const ternaryFilter = animals.filter((bob) => {
    // console.log("hello")
    return bob.length <= 5
})

// const succinctFilter = animals.filter( bob => bob.length <= 5)
// console.log(ternaryFilter)


const people = [
    { name: "Bob", age: 30 },
    { name: "Mary", age: 31 },
    { name: "Sue", age: 28 },
    { name: "George", age: 38 }
];

// filter people with age >= 30
const filteredPeople = people.filter((person) => {
    // console.log(person.age)
    if(person.age >= 30){
        return true
    }else {
        return false
    }
})

const filteredPeople2 = people.filter((person) => {
    // console.log(person.age)
    return person.age >= 30;
})

// console.log(filteredPeople2)
const newPeople = filteredPeople2.map( (eachElem) => {
    return `${eachElem.name} is ${eachElem.age} years old`
})
// console.log(newPeople)


const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const bListPkmn = pokemon.filter( p => p.name[0] === "B" );
// console.log(bListPkmn)

// an array containing just the first type of all the pokémon whose second type is "flying"
const newPokes = pokemon.filter( (eachPoke) => {
    return eachPoke.types[1] === "flying"
}).map( (eachOneThing) => {
    return eachOneThing.types[0]
})

// const cool = pokemon.filter( eachPoke => eachPoke.types[1] === "flying")
//     .map( eachOneThing => eachOneThing.types[0] )

console.log(newPokes)
console.log(cool)