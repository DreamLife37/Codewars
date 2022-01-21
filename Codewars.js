//Task 1: Reversed Strings
function solution(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + str[i]
  }
  return newString
}

console.log(solution('world'))

//Task 2: Fake Binary
function fakeBin(x) {
  let newString = "";
  for (let i = 0; i <= x.length; i++) {
    if (x[i] < 5) {
      newString = newString + 0
    } else
    if (x[i] >= 5) {
      newString = newString + 1
    }
  }
  return newString
}

console.log(fakeBin('531897445654'))