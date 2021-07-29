/*
 * @param {number} x
 * @return {number}

 Example 1:
  Input: x = 123
  Output: 321
 */

/*
var reverse = function(x) {
    x = x.toString().split('').reverse().join('')
    return parseInt(x)
};
console.log(reverse(-123))


var reverse1 = function(x) {
    let y = x.toString().split('').reverse().join('')
    
    if (x < 0) {
        return parseInt(0 - y)
    } else {
        return parseInt(y)
    }
};

console.log(reverse1(-123))

*/

var reverse = function(x) {
    if ((x < -(2**31)) || (x > 2**31 -1)) {
        return x = 0;
    } else if ((x <= 2**31 -1) && (x > 0)) {
        x = x.toString().split('').reverse().join('');
        if(x > 2**31 -1 ) {
            return x = 0;
        } else {
            return parseInt(x);
        }
    } else if ((x >= -(2**31)) && (x < 0)) {
        let y = 0 - x;
        y = y.toString().split('').reverse().join('')
        if ((0 - y) < -(2**31)){
            return y = 0
        } else {
            return parseInt(0 - y);
        }
    } else {
        return x = 0;
    }
};
console.log(reverse(-2147483648))




