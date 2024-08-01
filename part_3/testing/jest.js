var expect = chai.expect;


function concatString(element1, element2) {
    return element1 + element2
}

expect(concatString("abc", "def")).toBe("abcdef");
