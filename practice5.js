// More exercises

const checkAnagram = (string1, string2) => {
  return string1.split('').sort().join('') === string2.split('').sort().join('')
}

// console.log(checkAnagram('hello', 'ell'))

const capitalizeString = (sentence) => {
  let array = sentence.split(' ')
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].slice(0,1).toUpperCase() + array[i].slice(1))
  }
  return newArray.join(' ')
}

// console.log(capitalizeString('a lazy dog'))
// console.log(capitalizeString('look, it is working!'))
// console.log(capitalizeString('a short sentence'))


// (3) Return the number of vowels in a string

const numberOfVowels = (string) => {
  return string.match(/[aeiou]/g).length
}

// console.log(numberOfVowels('hello'))

// (4) STEPS

const steps = (number) => {
  let array = []
  for (let i = 1; i <= number; i++) {
    array.push('#'.repeat(i))
  }
  return array
}

// console.log(steps(10))

// Bubble sort (working on arrays of numbers)
const bubbleSort = (array) => {
  while(array !== array.sort()) {
    for (let i = 0; i < array.length-1; i++) {
      if (array[i] > array[i+1]) {
        let temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp
      }
    }
  }
  return array
}

// console.log(bubbleSort([5,1,4,2,8]))

const reverseString = (string) => {
  return string.split('').reverse().join('')
}

// console.log(reverseString('hello'))

const reverseInt = (int) => {
  if (int.toString().includes('-')) {
    return parseInt('-' + int.toString().replace('-', '').split('').reverse().join(''))
  } else {
    return int.toString().split('').reverse().join('')
  }
}

// console.log(reverseInt(15))
// console.log(reverseInt(-90))

const checkPalindrome = (string) => {
  if (string === string.split('').reverse().join('')) {
    return 'Yes, its a palindrome!'
  } else {
    return 'Nope, not a palindrome!'
  }
}

// console.log(checkPalindrome('ab!ba'))

// Fizzbuzz

const fizzBuzz = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

// console.log(fizzBuzz(100))
