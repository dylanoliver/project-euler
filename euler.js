var sumArray = [];
var result = 0;

for (var i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sumArray.push(i);
  }
}
for (var j = 0; j < sumArray.length; j++) {
    result += sumArray[j];
}
console.log(result);
