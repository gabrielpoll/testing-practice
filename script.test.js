import {capitalize, reverseString, calculator, caesarCipher} from './script.js'


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

test('takes a string and a shift factor and returns it with each character "shifted".', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
    //expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})