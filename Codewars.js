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

function smash(words) {
  return words.join(" ");
};

//Task 9: MakeUpperCase
//Вернуть строку в верхнем регистре
function makeUpperCase(str) {
  return str.toUpperCase()
}

//Task 10: Quarter of the year
//Функция возвращающая квартал в зависимости от месяца
const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  }
  if (month > 3 && month <= 6) {
    return 2
  }
  if (month > 6 && month <= 9) {
    return 3
  }
  if (month > 9) {
    return 4
  }
}

//либо
const quarterOf = m => Math.ceil(m / 3);

//Task 11: Grasshopper - Grade book
/* Найти среднее значение и вернуть букву
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F' */

function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3
  if (score >= 90) {  return 'A'
  } else if ( score >= 80) {
    return 'B'
  } else  if (score >= 70) {
    return 'C'
  } else  if (score >= 60) {
    return 'D'
  } else  if (score < 60) {
    return 'F'
  }
}

console.log(getGrade(70, 72, 78))