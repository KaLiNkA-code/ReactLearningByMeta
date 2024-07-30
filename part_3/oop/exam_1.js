// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy += 10
    }

    doSomethingFun() {
        this.energy -= 10
    }

}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name="Tom", age=20, energy=100, xp=0, hourlyWage=10) {
        super(name, age, energy)
        this.name = name;
        this.age = age;
        this.energy = energy;
        this.xp = xp
        this.hourlyWage = hourlyWage
    }

    goToWork() {
        this.xp += 10
    }
}



// Task 3: Code an intern object, run methods
function intern() {
    bob = new Worker("Bob", 21, 110, 0, 10)
    bob.goToWork()
    return bob
}

// Task 4: Code a manager object, methods
function manager() {
    alice = new Worker("Alice", 30, 120, 100, 30)
    alice.doSomethingFun()
    return alice
}

// new_intern = intern()

// console.log(new_intern)

// console.log(new_intern.xp)
// console.log(new_intern.goToWork())
// console.log(new_intern.xp)
// console.log(new_intern.goToWork())
// console.log(new_intern.xp)
// console.log(new_intern.goToWork())
// console.log(new_intern.xp)
// console.log(new_intern.goToWork())
// console.log(new_intern.xp)
// console.log(new_intern.goToWork())


// new_manager = manager()

// console.log(new_intern)

// console.log(new_intern.energy)
// console.log(new_intern.doSomethingFun())
// console.log(new_intern.energy)
// console.log(new_intern.doSomethingFun())
// console.log(new_intern.energy)
// console.log(new_intern.doSomethingFun())
// console.log(new_intern.energy)
// console.log(new_intern.doSomethingFun())
// console.log(new_intern.energy)
// console.log(new_intern.doSomethingFun())
