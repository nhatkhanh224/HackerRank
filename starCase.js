function staircase(n) {
  for (let i = 0; i < n; i++) {
    let strings = "";
    for (let j = 0; j < n - i - 1; j++) {
      strings += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      strings += "#";
    }
    console.log(strings);
  }
}
/*
    n=6;
    j=n-1;
    k=n-j;

      

    i=0; j=5;  k=1;
        5spaces 1#
    i=1; j=4;  k=2;
        5spaces 1#
    i=2; j=3;  k=3;
        5spaces 1#
    i=3; j=2;  k=4;
        5spaces 1#
    i=4; j=1;  k=5;
        5spaces 1#
    i=5; j=0;  k=6;
        5spaces 1#
 */
var a = staircase(6);
console.log(a);
