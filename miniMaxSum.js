function miniMaxSum(arr) {
  let arrLength = arr.length;
  let max = arr[0],
    min = arr[0],
    sum = 0;
  for (let i = 0; i < arrLength; i++) {
    sum += arr[i];
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  let minSum = sum - max;
  let maxSum = sum - min;
  return minSum + " " + maxSum;
}
var a = [1, 2, 3, 4, 5];
console.log(miniMaxSum(a));
