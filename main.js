function isEvenlyDivisible(x, y) {

  if (x % y === 0) {
    return true
  }
  return false
}



function halfSquare(x) {
  return (x * x) / 2
}

function isLong(arr) {
  return (arr.length >= 15)
}

function exclaim(arr) {

  if (arr[arr.length - 1] !== '!') {
    return arr + '!'
  }
  else {
    let newArr = ''
    for (const ch of arr) {
      newArr = newArr + ch
      if (ch === '!') { break; }
    }
    return newArr
  }
}

function countWords(arr) {
  return (arr.split(" ").length)
}

function containsDigit(arr) {
  for (const num of arr) {
    if (num === '1' || num === '2' || num === '3' || num === '4' || num === '5' || num === '6' || num === '7' || num === '8' || num === '9' || num === '0') { return true }
  }
  return false
}

function containsLowerCase(arr) {
  if (arr !== arr.toUpperCase()) { return true }
  return false
}

function containsUpperCase(arr) {
  if (arr !== arr.toLowerCase()) { return true }
  return false

}

function containsNonAlphanumeric(arr) {
  let code = 0
  for (const ch of arr) {
    code = ch.charCodeAt(0);
    if (!(code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0)) &&
      !(code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0)) &&
      !(containsDigit(ch))) { return true }
  }

  return false
}


function containsSpace(arr) {

  if (arr.length === 0) { return false }
  let x = arr.indexOf(" ");
  if (x > -1) { return true }
  return false

}

function digits(num) {
  if (num < 0) {
    num = num * -1
  }
  let arr = num.toString()
  let newArr = []
  for (const ch of arr) {
    if (ch !== '.') {
      newArr.push(Number(ch))
    }
  }


  return newArr
}

function truncate(arr) {
  if (arr.length < 15) {
    return arr
  }

  return arr.slice(0, 8) + "..."
}

function isValidPassword(arr) {
  if (containsDigit(arr) && containsLowerCase(arr) && containsNonAlphanumeric(arr) && containsUpperCase(arr) && !containsSpace(arr)) { return true }
  return false

}

function onlyPunchy(arr) {
  let newarr = []
  for (const word of arr) {
    let newword = exclaim(word)
    if (newword.length <= 15) {
      newarr.push(newword)
    }

  }
  return newarr

}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}