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


//Task 3: Rock Paper Scissors
const rps = (p1, p2) => {
  if (p1 === p2) {
    return `Draw!`;
  }
  if (p1 === 'rock' && p2 === 'scissors') {
    return `Player 1 won!`;
  } else if (p1 === 'paper' && p2 === 'rock') {
    return `Player 1 won!`;
  } else if (p1 === 'scissors' && p2 === 'paper') {
    return `Player 1 won!`;
  } else {
    return `Player 2 won!`;
  }
};


//Task 4: Vowel remover
function shortcut(string) {
  newString = string.replace(/[aeiou]/g, "")
  return newString;
}

console.log(shortcut('hello'))

Examples
  "hello"-- > "hll"
"codewars"-- > "cdwrs"
"goodbye"-- > "gdby"
"HELLO"-- > "HELLO"

//Task 5: Student's Final Grade
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100
  if (exam > 75 && projects >= 5) return 90
  if (exam > 50 && projects >= 2) return 75
  return 0
}

console.log(finalGrade(91, 5))

/* 
Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0 */

//Task 6: Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * discount / 100))
}
console.log(dutyFree(10, 10, 500))

//Task 7: Well of Ideas - Easy Version
//Если в массиве 1 или 2 хорошие идеи вернуть Publish, если больше 3, то I smell a series! , если нет хороших идей, то Fail!
function well(x) {
  const count = x.filter(x => x == 'good').length;
  return count < 1 ? 'Fail!' :
    count < 3 ? 'Publish!' : 'I smell a series!';
}

//Task 8: Sentence Smash
//Склеить массив слов в предложение
//['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
  return words.join(" ");
};
