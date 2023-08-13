var numbers = [10, 6, 1, 9, 1, 8];

var newArr = [];

for (var i = 0; i < numbers.length; i++) {
  //Kiểm tra nếu đã có => bỏ qua
  if (newArr.includes(numbers[i])) {
    continue;
  }

  newArr[newArr.length] = numbers[i];
}

console.log(newArr);
