// Exercise 1 


const responses = [
  'This is the best job ever!',
  'Satisfied',
  'At least I get paid.',
  "I'm looking for another job.",
  "I don't want to answer."
]

const chooseRandomResponse = () => {
  return responses[Math.floor(Math.random()*responses.length)]
}
let randomresponse = chooseRandomResponse()

let companyAnswers = []
const chooseCompanyAnswers = () => {
  for (let i = 0; i < 10; i++) {
    companyAnswers.push(chooseRandomResponse())
  }
  return companyAnswers
}

let companyanswers = chooseCompanyAnswers()

console.log(companyanswers)

let departmentAnswers = []
const chooseDepartmentAnswers = () => {
  for (let i = 0; i < 5; i ++) {
    let companyAnswers = []
    for (let i = 0; i < 10; i++) {
      companyAnswers.push(chooseRandomResponse())
    }
    departmentAnswers.push(companyAnswers)
  }
  return departmentAnswers
}

let departmentanswers = chooseDepartmentAnswers()

console.log(departmentanswers)
