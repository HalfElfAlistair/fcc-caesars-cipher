function rot13(str) {
  let standardAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let rot13Alphabet = "NOPQRSTUVWXYZABCDEFGHIJKLM".split("");
  let stringToDecode = str.split("");
  let newArray = [];

for (let i = 0; i < stringToDecode.length; i++) {
  let character = stringToDecode[i];
  let alphaIndex = rot13Alphabet.indexOf(character);
  if (standardAlphabet.includes(character) == false) {
    newArray.push(character);
  } else {
    newArray.push(standardAlphabet[alphaIndex]);
  }
}
  return newArray.join("");
}