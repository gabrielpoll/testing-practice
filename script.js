function capitalize(str) {
    if (!str) return "";
    const result = str
    .toLowerCase()
    .split(" ")
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(" ")
    return result;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

const calculator = {
    add(a, b) {
        return a + b
    },
    subtract: (a, b) => a - b,
    divide: (a, b) => b !== 0 ? a / b : "Error",
    multiply: (a, b) => a * b
}

export {capitalize, reverseString, calculator}
