// Import the encryptors functions here.
const encrytors = require('./encryptors.js')
// Encryption Functions
/////////////////////////////////////////////
const caesar  = encrytors.caesarCipher
const symbol = encrytors.symbolCipher
const reverse  = encrytors.reverseCipher

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  return reverse(symbol(caesar(str, 5)))
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  return caesar(symbol(reverse(str)), -5)
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);