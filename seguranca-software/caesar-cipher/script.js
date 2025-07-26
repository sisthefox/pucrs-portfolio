// Encrypt the text 
function encrypt() {
  const text = document.getElementById("inputText").value;
  const shift = parseInt(document.getElementById("shift").value);
  const result = caesarCipher(text, shift);
  document.getElementById("result").textContent = result;
}

// Decrypt the text
function decrypt() {
  const text = document.getElementById("inputText").value;
  const shift = parseInt(document.getElementById("shift").value);
  const result = caesarCipher(text, -shift);
  document.getElementById("result").textContent = result;
}

// Caesar Cipher logic
function caesarCipher(str, shift) {
  return str.split('').map(char => {
    const code = char.charCodeAt(0);

    // Uppercase A-Z
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
    }

    // Lowercase a-z
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
    }

    // Other characters
    return char;
  }).join('');
}