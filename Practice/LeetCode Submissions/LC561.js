var arrayPairSum = function (nums) {
    let arr = nums.sort((a, b) => a - b), sum = 0;
    for (let i = 0; i < arr.length; i = i + 2) {
        sum += Math.min(arr[i], arr[i + 1]);
    }
    return sum;
};

console.log(arrayPairSum([1, 3, 5, 2]));
