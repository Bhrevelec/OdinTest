const capitalize = (str) => {
  if (!str) return '';
  return str[0].toUpperCase() + str.slice(1);
}

const reverseString = (str) => {
    if (!str) return '';
    return str.split('').reverse().join('')
}

const calculator = {
    add: (x,y) => {
    return x+y
},
    subtract: (x,y) => {
    return x-y
},
    multiply: (x,y) => {
    return x*y
},
    divide: (x,y) => {
    if (y===0) {
        return undefined
    }
    return x/y
}
}

const caesarify = (str, shiftFactor) => {
    let result = ''
    let changeCase = false;
    for (let char of str) {
        if(!char.match(/[a-zA-Z]/)) {
            result += char;
        } else {
            if (char.toUpperCase()==char) {
                changeCase = true;
                char = char.toLowerCase();
            }
            let charCodeNew = (char.charCodeAt(0) - 97 + shiftFactor) % 26 + 97;
            if (changeCase) {
                result += String.fromCharCode(charCodeNew).toUpperCase();
            } else {
                result += String.fromCharCode(charCodeNew);
            }
        }
        changeCase = false;
    }
    return result
}

module.exports = { capitalize, reverseString, calculator, caesarify}