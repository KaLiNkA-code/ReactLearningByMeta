// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (let i = 0; i < dairy.length; i++) {
        console.log(dairy[i]);
    }
}

// logDairy()

// Task 2

const animal = {

    canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    let keys = Object.keys(bird);
    for (let key of keys) {
        console.log(key + ": " + bird[key]);
    }
}


// Task 3


function animalCan() {
    for (let key in bird) {
        console.log(key + ": " + bird[key]);
    }
}
