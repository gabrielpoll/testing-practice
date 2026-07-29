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

function returnShiftedLetter(letter, shift) {
    if (!/[a-z]/i.test(letter)) {
    return letter;
}
    const upperLetter = letter === letter.toUpperCase();
    let isUpper = false;
    if (upperLetter) {
        isUpper = true;
    }

    const alphaDict = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
  j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17,
  r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    };
    let getNumberInDict = alphaDict[letter.toLowerCase()] + shift;
    let shiftedLetter;

    if (getNumberInDict > 26) {
        getNumberInDict -= 26
    } 
    if (getNumberInDict < 1) {
        getNumberInDict += 26
    }
    for (const key in alphaDict) {
        if (Object.hasOwn(alphaDict, key)) {
            if (alphaDict[key] === getNumberInDict) {
                shiftedLetter = key;
            }
        }
    }
    if (isUpper) {
        return shiftedLetter.toUpperCase();
    }
    return shiftedLetter;
    }

function caesarCipher(string, shift) {
    let newString = ""

    string.split("").forEach((letter) => {
        newString += returnShiftedLetter(letter, shift);
    });
    return newString;
}

console.log(caesarCipher('hello', 3))

const calculator = {
    add(a, b) {
        return a + b
    },
    subtract: (a, b) => a - b,
    divide: (a, b) => b !== 0 ? a / b : "Error",
    multiply: (a, b) => a * b
}

export {capitalize, reverseString, calculator, caesarCipher}
