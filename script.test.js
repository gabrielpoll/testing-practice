import {capitalize, reverseString} from './script.js'

test('capitalize something', () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('ronaldinho gaucho')).toBe('Ronaldinho Gaucho')
    expect(capitalize('last example example')).toBe('Last Example Example')
});

test('take a string and reverse it', () => {
    expect(reverseString('gabriel')).toBe('leirbag');
})