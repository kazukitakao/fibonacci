'use strict';
// フィボナッチ数列のアルゴリズム
// n個の列があった場合(0,1を除く)、(n-1)+(n-2)
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}