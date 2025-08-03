var isPalindrome = function (x) {
    let rev = 0, n = x
    while (n > 0) {
        rem = n % 10
        rev = rev * 10 + rem
        n = Math.floor(n / 10)
    }
    return rev == x ? true : false
};

console.log(isPalindrome(45654));
