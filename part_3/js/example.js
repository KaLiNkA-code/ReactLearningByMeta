let top3 = [
    "ex1",
    "ex2",
    "ex3",
]

console.log(top3)


function exampleFunction(ex1, ex2, ex3) {
    console.log(ex1);
    console.log(ex2);
    console.log(ex3);
}

exampleFunction(top3[0], top3[1], top3[2])

console.log()

exampleFunction(...top3)



// const [] = top3;


// const [] = top3;


const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}


console.log("###########################################")

const meal = ["soup", "steak", "ice cream", "steak", "ice cream", "steak", "ice cream"]
let [starter, second, third, ...exxx] = meal;

console.log(starter);
console.log(second);
console.log(third);
console.log(exxx);
