import {capitalize, reverseString, calculator} from './script.js'


test('capitalize something', () => {
    expect(capitalize('hello')).toBe('Hello')
});

test('take a string and reverse it', () => {
    expect(reverseString('gabriel')).toBe('leirbag');
})

test('take calculator object and test functions that execute basic operations', () => {
    expect(calculator.add(5, 5)).toBe(10)
    expect(calculator.subtract(20, 10)).toBe(10)
    expect(calculator.divide(10, 2)).toBe(5)
    expect(calculator.multiply(5, 2)).toBe(10);
})