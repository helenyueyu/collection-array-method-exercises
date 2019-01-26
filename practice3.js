// Exercise 3

checkRepeats = function(str) {
  for (var i = 0; i <= str.length; i++) {
    for (var j = i+1; j <= str.length; j++) {
      if (str[j] == str[i]) {
        return true
      }
    }
  }
  return false
}
const checkPassword = (password) => {
  let cutPassword = password.slice(0, 10)
  let strippedPassword = cutPassword.replace(/\D/g, "")
  if (cutPassword === strippedPassword) {
    if (checkRepeats(cutPassword) === false) {
      return 'Good password'
    } else {
      return 'Bad password'
    }
  } else {
    return 'Ouch, Bad password'
  }
}

console.log(checkPassword('1123456'))
