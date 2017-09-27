module.exports = function multiply(first, second) {
    let firstArr = first.split('');
    let secondArr = second.split('');

    function sum(arr1, arr2) {
        let result = [];
        for (let i = 0; i < arr2.length; i++) {
            result.push(arr1[i] + arr2[i]);
        }
        for (let i = arr2.length; i < arr1.length; i++) {
            result.push(arr1[i]);
        }
        return result;
    }
    let result = firstArr.map((value) => value * secondArr[secondArr.length - 1]);
    let tempRes = 0;
    for (let i = secondArr.length - 2; i >= 0; i--) {
        tempRes = firstArr.map((value) => value * secondArr[i]);
        result.unshift(0);
        result = sum(result, tempRes);
    }
    for (let i = result.length - 1; i > 0; i--) {
        result[i - 1] += Math.floor(result[i] / 10);
        result[i] = result[i] % 10;
    }
    return result.join('');
}