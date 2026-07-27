import {capitalize, reverseString} from './script.js'

test('capitalize something', () => {
    expect(capitalize('hello')).toBe('Hello')
});

test('take a string and reverse it', () => {
    expect(reverseString('gabriel')).toBe('leirbag');
})