var isPalindrome = function(x) {
  if (x < 0 ) return false;
  if (x > 2**31 -1 ) return false;
  x = x.toString()
  let y = x.toString().split('').reverse().join('')
  console.log(x)
  console.log(y)
  if (x === y) return true;
  return false;
};

