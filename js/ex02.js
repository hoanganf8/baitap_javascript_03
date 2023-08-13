var numbers = [10, 6, 1, 9, 8];

var isPrime = function (n) {
  if (n <= 1 || n % 1 !== 0) {
    return false;
  }

  for (var i = 2; i < n - 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

var total = 0;
var avg;
var count = 0;
for (var i = 0; i < numbers.length; i++) {
  if (isPrime(numbers[i])) {
    total += numbers[i];
    count++;
  }
}

if (count > 0) {
  avg = total / count;
  console.log(`Trung bình cộng ${count} số nguyên tố là: ${avg}`);
} else {
  console.log("Không có số nguyên tố");
}
