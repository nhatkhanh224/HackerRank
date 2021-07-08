function birthdayCakeCandles(candles) {
  let candlesLength = candles.length;
  let max = Math.max(...candles);
  let numberOfLoops = 0;
  for (let i = 0; i < candlesLength; i++) {
    if (candles[i] == max) {
      numberOfLoops++;
    }
  }
  return numberOfLoops;
}
console.log(birthdayCakeCandles([1, 2, 3, 1, 3, 3]));
