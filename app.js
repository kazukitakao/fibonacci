'use strict';
// フィボナッチ数列のアルゴリズム
// n個の列があった場合(0,1を除く)、(n-1)+(n-2)
function fib(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  }
  
  const length = 40;
  for (let i = 0; i <= length; i++) {
    console.log(fib(i));
  }