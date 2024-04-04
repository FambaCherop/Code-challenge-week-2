function swapCase(str) {
    let letter = str.split('');
    return letters.map(letter =>
        (letter === letter.toUpperCase()) ?
        letter.toLowercase() : letter.
  toUpperCase()    
        ).join('');
}

let output = swapCase("The Quick Brown Fox"
);
console.log(output);