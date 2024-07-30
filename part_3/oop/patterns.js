
// Наследование

class Bird {

}


class Penguin extends Bird {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }

    useWings() {
        console.log("Penguin example");
    }
}


class Eagle extends Bird {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    useWings() {
        console.log("Eagle example");
    }
}


// Полиморфизм

function SameExampleMethod(input_object) {
    input_object.useWings();
}


// синтаксис экземпляра класса
little_eagle = new Eagle();

SameExampleMethod(little_eagle)
