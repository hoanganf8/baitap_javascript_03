var numbers = [10, 6, 1, 9, 8];

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);

var element = -5;

if (element < numbers[0]) {
  numbers.unshift(element);
} else if (element > numbers[numbers.length - 1]) {
  numbers.push(element);
} else {
  var indexInsert;
  for (var i = 0; i < numbers.length; i++) {
    if (element >= numbers[i] && element < numbers[i + 1]) {
      indexInsert = i;
      break;
    }
  }

  numbers = [].concat(
    numbers.slice(0, indexInsert + 1),
    element,
    numbers.slice(indexInsert + 1),
  );
}

console.log(numbers);
