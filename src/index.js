module.exports = function multiply(first, second) {
    let firstArr = first.split('');
    let secondArr = second.split('');
    let result = new Array(firstArr.length).fill(0);
    let tempRes = 0;
    for (let i = 0; i < secondArr.length; i++) {
        firstArr.forEach((digit, j) => {
            tempRes = +digit * secondArr[i];
            if (i + j < result.length) {
                result[i + j] += tempRes;
            } else {
                result.push(tempRes);
            }
        });
    }
    for (let i = result.length - 1; i > 0; i--) {
        result[i - 1] += Math.floor(result[i] / 10);
        result[i] = result[i] % 10;
    }
    return result.join('');
}