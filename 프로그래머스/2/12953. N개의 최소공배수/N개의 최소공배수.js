function solution(arr) {
  let mul = 1;
  let i = 2;

  arr.sort((a, b) => a - b);
  const max = arr[arr.length - 1];
    
  // if (arr.every((num) => num === 1)) return 1;

  while (i <= max) {
    let j = 0;
    if (arr.some((n) => n % i === 0)) mul *= i;
    while (j <= arr.length - 1) {
      const n = arr[j];
      if (n % i === 0) {
        arr[j] = n / i;
      }
      j++;
    }
    if (arr.every((n) => n % i !== 0)) i++;
  }
  return arr.reduce((acc, num) => acc * num, 1) * mul;
}
