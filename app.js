const people= [
  {name: Kevin,
  age:32},
  {name: Paul,
  age:24}
]

const numbers = [1, 2, 4, 6, 7, 2, 3]

function sum(array) {
  return array.reduce((accumulator, number) => {
    return accumulator += number
  }, 0)
}

sum(numbers)
