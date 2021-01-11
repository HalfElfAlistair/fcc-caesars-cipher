function rot13Convert() {
  let cipherString = document.getElementById("string").value;
  let standardAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let rot13Alphabet = "NOPQRSTUVWXYZABCDEFGHIJKLM".split("");
  let stringToDecode = cipherString.toUpperCase().split("");
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
  let result = newArray.join("");

  document.getElementById("translated-cipher").innerHTML = result;
}