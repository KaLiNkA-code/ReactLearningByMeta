console.log("Example for the test")

var person = "John";

console.log("Hello", person)

var greeting = "Hello"

console.log(greeting, person)


switch(greeting) {
    case "Hello":
        console.log("Drive");
        break;
    case "goodbay":
        console.log("Drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('There is no such day');
}


var example = Math.random()

console.log("example", example)


try {

    
    // console.log(a + b)
    throw new ReferenceError;

} catch (ReferenceError) {
    console.log("Errr");
}

// throw new Error();
// console.log("Hello");