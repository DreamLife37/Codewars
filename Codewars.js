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
  if (score >= 90) {
    return 'A'
  } else if (score >= 80) {
    return 'B'
  } else if (score >= 70) {
    return 'C'
  } else if (score >= 60) {
    return 'D'
  } else if (score < 60) {
    return 'F'
  }
}

console.log(getGrade(70, 72, 78))


//Task 12: Will there be enough space?
//Есть ли свободные места? Если да то вывести 0, если нет, то сколько не убирается.
/* cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting */
function enough(cap, on, wait) {
  let freePlaces = cap - on
  if ((freePlaces - wait) > 0) {
    return 0
  } else return -(freePlaces - wait)
}

console.log(enough(100, 60, 50))

//либо
function enough(cap, on, wait) {
  return (on + wait > cap) ? on + wait - cap : 0;
}

//Task 13: Beginner Series #1 School Paperwork
//Посчитать сколько нужно страниц скопировать, если n - одноклассников, а m - столько страниц в документах.

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0
  }
  return n * m
}

//либо 
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}

//Task 14: Beginner Series #2 Clock
//Посчитать время от 00 в миллисекундах
function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000
}

console.log(past(0, 1, 1))

//Task 15: Beginner Series #3 Sum of Numbers
//Посчитать сумму всех целых чисел между ними, либо если числа равные вернуть любое из них.
function getSum(a, b) {
  if (a == b) {
    return a
  }
  let sum = 0;
  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum = sum + i
    }
  } else {
    for (let i = a; i <= b; i++) {
      sum = sum + i
    }
  }
  return sum
}

//либо 
function GetSum(a, b) {
  if (a == b) return a;
  else if (a < b) return a + GetSum(a + 1, b);
  else return a + GetSum(a - 1, b);
}


//Task 16: Beginner Series #4 Cockroach
//Перевод скорости из км/ч в см/с сокруглением в меньшую сторону до целого числа
function cockroachSpeed(s) {
  return Math.floor(s * 27.778)
}

//либо 
function cockroachSpeed(s) {
  return Math.floor(s * 100000 / 3600);
}


//Task 17: Is he gonna survive?
//Выживет ли герой? Есть патроны и есть драконы, на каждого дракона требуется потратить 2 патрона
function hero(bullets, dragons) {
  return (bullets >= dragons * 2) ? true : false
}

//так лучше:
function hero(bullets, dragons) {
  return bullets >= dragons * 2
}


//Task 18: Calculate BMI
function bmi(weight, height) {
  let index = weight / (height * height)
  if (index <= 18.5) {
    return 'Underweight'
  }
  if (index <= 25) {
    return 'Normal'
  }
  if (index <= 30) {
    return 'Overweight'
  } else return 'Obese'
}

console.log(bmi(74, 1.7))

//либо
function bmi(weight, height) {
  var bmi = weight / (height * height);
  return bmi < 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
}

//Task 19: String repeat
function repeatStr(n, s) {
  return s.repeat(n)
}

//либо
function repeatStr(n, s) {
  var str = "";
  for (var i = 0; i < n; i++)
    str += s;
  return str;
}

//Task 20: Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2)
}

//либо 
function twiceAsOld(a, b) {
  return a > 2 * b ? a - 2 * b : 2 * b - a;
}

//Task 21: Square(n) Sum
//Каждое переданное число возвести в квадрат и вывести сумму
//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers) {
  let result = numbers.map(number => Math.pow(number, 2)).reduce((total, amount) => total + amount, 0);
  return result
}

console.log(squareSum([1, 3]))

//либо
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return (n * n) + sum;
  }, 0)
}

//Task 22: Convert a Boolean to a String
//Если приходит булиновое значение true, то возвращаем строку true
function booleanToString(b) {
  result = b.toString()
  return result
}

console.log(booleanToString(true))

//либо
function booleanToString(b) {
  return b ? 'true' : 'false';
}

//Task 23: Abbreviate a Two Word Name
//Sam Harris => S.H
//patrick feeney => P.F

function abbrevName(name) {
  name = name.toUpperCase()
  i = name.indexOf(' ')
  result = name[0] + '.' + name[i + 1]
  return result
}
console.log(abbrevName('Andrey Schavelev'))

//либо
function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//Task 24: Convert a String to a Number!
/* "1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7 */

var stringToNumber = function (str) {
  number = Number(str)
  return number;
}

//либо
var stringToNumber = function (str) {
  return parseInt(str);
}


//Task 25: Drink about
function peopleWithAgeDrink(old) {
  switch (true) {
    case (old >= 21):
      return 'drink whisky'
    case (old >= 18):
      return 'drink beer'
    case (old >= 14):
      return 'drink coke'
    default:
      return 'drink toddy'
  }
};
console.log(peopleWithAgeDrink(14))

//либо

function peopleWithAgeDrink(old) {
  if (old < 14) {
    return 'drink toddy'
  }
  if (old < 18) {
    return 'drink coke'
  }
  if (old < 21) {
    return 'drink beer'
  } else return 'drink whisky'
};
console.log(peopleWithAgeDrink(21))

//либо 
const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"

//Task 26: A Needle in the Haystack

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];

function findNeedle(haystack) {
  haystack.map((element, index) => {
    if (element == 'needle') {
      console.log(element, index)
      position = index
    }
  })
  return "found the needle at position " + position;
}

console.log(findNeedle(haystack_1))

//либо
function findNeedle(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 'needle')
      return 'found the needle at position ' + i;
  }
}

//либо
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

//Task 27: Area or Perimeter

area_or_perimeter(6, 10) -- > 32
area_or_perimeter(3, 3) -- > 9

const areaOrPerimeter = function (l, w) {
  if (l == w) {
    return l * w
  }
  return (l + w) * 2
};

//либо 
const areaOrPerimeter = function (l, w) {
  return l == w ? l * w : 2 * (l + w)
};

//Task 28: Reversed sequence
//Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.
//Пример: n=5-->[5,4,3,2,1]

const reverseSeq = n => {
  newArray = []
  for (let i = n; i > 0; i--) {
    newArray.push(i)
  }
  return newArray;
};

console.log(reverseSeq(5))

//Task 29: Remove First and Last Character
//Удалить первый и последний символ в строке
function removeChar(str) {
  let newStr = ''
  for (let i = 1; i < str.length - 1; i++) {
    newStr += str[i]
  }
  return newStr
};

console.log(removeChar('Hello'))

//либо
function removeChar(str) {
  return str.slice(1, -1);
}

//Task 30: Count of positives / sum of negatives
//Вернуть массив из двух чисел: Количество положительных и сумму отрицательных
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

function countPositivesSumNegatives(input) {
  newArr = [0, 0]
  if (input === null || input.length < 1) {
    return [];
  }
  input.forEach((item, index) => {
    if (item > 0) {
      newArr[0] += 1
      // console.log(count)
    }
    if (item < 0) {
      newArr[1] += item
      //console.log(sum)
    }
  })
  return newArr;
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

//либо
function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0)
    return [];
  var positive = 0;
  var negative = 0;
  for (var i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0)
      ++positive;
    else
      negative += input[i];
  }
  return [positive, negative];
}

//Task 31: Sum The Strings

Example: (Input1, Input2-- > Output)
"4", "5"-- > "9"
"34", "5"-- > "39"
"", ""-- > "0"
"2", ""-- > "2"
"-5", "3"-- > "-2"

function sumStr(a, b) {
  const num1 = Number(a);
  const num2 = Number(b);
  return String(num1 + num2)
}
console.log(sumStr("", ""))

//либо
function sumStr(a, b) {
  return (+a + +b) + ''
}

//Task 32: Sum of Multiples
/* Find the sum of all multiples of n below m
Examples
sumMul(2, 9) == > 2 + 4 + 6 + 8 = 20
sumMul(3, 13) == > 3 + 6 + 9 + 12 = 30
sumMul(4, 123) == > 4 + 8 + 12 + ... = 1860
sumMul(4, -7) == > "INVALID" */

function sumMul(n, m) {
  let sum = 0

  if (n < m) {
    for (let i = n; i <= m; i++) {
      if ((i % n) == 0) {
        sum += i
      }
    }
    return sum
  }
  return 'INVALID'
}

console.log(sumMul(2, 9))

//либо:
function sumMul(n, m) {
  if (n >= m) return "INVALID";
  var sum = 0;
  for (var i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}

//либо 
const sumMul = (n, m) => ~~(m / n) * (m + n - m % n) / 2 || 'INVALID';

//Task 33: Convert a Number to a String!
123 --> "123"
999 --> "999"
function numberToString(num) {
  return String(num)
}

console.log(numberToString(123))

//либо:
function numberToString(num) {
  return ''+num;
}

//Task 34: Double Char
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
function doubleChar(str) {
  let newStr = ''
  for (let i = 0; i < str.length ; i++) {
     newStr += str.charAt(i)+str.charAt(i)
      }
  return newStr
}

console.log(doubleChar('String'))

//либо:
const doubleChar = (str) => str.split("").map(c => c + c).join("");

