function kangaroo(x1, v1, x2, v2) {
  let n = 0;
  while (n < 10000) {
    if (x1 + n * v1 === x2 + n * v2) {
      return "YES";
    }
    n++;
  }
  return "NO";
}
console.log(kangaroo(0,3,4,2));
/*
  0+(0*3) vs 4+(0*2)
  0+(1*3) vs 4+(1*2)
  0+(2*3) vs 4+(2*2)
  0+(3*3) vs 4+(3*2)
*/