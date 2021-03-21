function palindrome(str) {
  const palind = str.split().reverse().join();
  return str.toLowerCase() === palind.toLowerCase() ? 'true' : 'false';
}

module.exports = palindrome;
