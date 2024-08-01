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
