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

export {capitalize, reverseString}
