const {default: TestRunner} = require('jest-runner');
const addFive = require('./addFive');

test('trtuurns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
    expect(addFive(2)).toBe(7);
})