function rot13Convert() {
  let cipherString = document.getElementById("string").value;
  let standardAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let rot13Alphabet = "NOPQRSTUVWXYZABCDEFGHIJKLM".split("");
  let stringToDecode = cipherString.toUpperCase().split("");
  let newArray = [];

  //Checks if a character at the current index is part of the standard alphabet string.
  // If false character is pushed to a new array in it's current form. If true, it's respective index is found in the standard array and pushed.

for (let i = 0; i < stringToDecode.length; i++) {
  let character = stringToDecode[i];
  let alphaIndex = rot13Alphabet.indexOf(character);
  if (standardAlphabet.includes(character) == false) {
    newArray.push(character);
  } else {
    newArray.push(standardAlphabet[alphaIndex]);
  }
}

// The new, translated, array is converted back to a string and then used as a new value one the HTML page.

  let result = newArray.join("");

  document.getElementById("translated-cipher").innerHTML = result;
}



function reverseRot13Convert() {
  let normalString = document.getElementById("regular-string").value;
  let standardAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let rot13Alphabet = "NOPQRSTUVWXYZABCDEFGHIJKLM".split("");
  let stringToDecode = normalString.toUpperCase().split("");
  let newArray = [];

  //Checks if a character at the current index is part of the standard alphabet string.
  // If false character is pushed to a new array in it's current form. If true, it's respective index is found in the standard array and pushed.

for (let i = 0; i < stringToDecode.length; i++) {
  let character = stringToDecode[i];
  let alphaIndex = standardAlphabet.indexOf(character);
  if (rot13Alphabet.includes(character) == false) {
    newArray.push(character);
  } else {
    newArray.push(rot13Alphabet[alphaIndex]);
  }
}

// The new, translated, array is converted back to a string and then used as a new value one the HTML page.

  let result = newArray.join("");

  document.getElementById("translated-text").innerHTML = result;
}