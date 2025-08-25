//編寫一個名為isAllUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的所有字母是否為大寫。
// 邏輯如下:
// for迴圈一直找如迴圈結束都沒return false則所有字母為大寫 反之不是
function isAllUpperCase(str) {
  if (str.length == 0) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}

console.log(isAllUpperCase("ABCD")); // returns true
console.log(isAllUpperCase("")); // returns false
console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false
