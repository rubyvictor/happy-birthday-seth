function caesarCipher(string, shiftAmount) {
  return string
    .split("")
    .map(char => {
      if (
        char.toLowerCase() !== char.toUpperCase() &&
        char.charCodeAt(0) !== 32
      ) {
        let baseIndex = char >= "a" ? 97 : 65;
        let newIndex = char.charCodeAt(0) - baseIndex + shiftAmount;
        return String.fromCharCode(baseIndex + (newIndex + 26) % 26);
      } else {
        return char;
      }
    })
    .join("");
}

var encrypt = function(string, shiftAmount) {
  return caesarCipher(string, shiftAmount % 26);
};

var decrypt = function(string, shiftAmount) {
  return caesarCipher(string, (-shiftAmount + 26) % 26);
};

// DO NOT TOUCH THIS PART OF THE CODE!
if (
  process.argv[2] ===
  "Hgx Angwkxw Hkvatkw Khtw, Vhgvhkwx Ahmxe & Lahiibgz Ftee, #sxkhmph-yhkmrmakxx"
) {
  console.log(decrypt(process.argv[2], 19));
}
module.exports = {
  encrypt: encrypt,
  decrypt: decrypt
};
