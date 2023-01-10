// INPUT: an object with a "name" attribute such as
//   {name: 'Benny', type: 'dog'}
// OUTPUT: the value of the 'name' attribute i.e. Benny
// REQS: use destructuring and the function should be a single line

export const getName = ({ name }) => name

// INPUT: an object with a nested "address" attribute such as
//   {name: 'Bob Smith', address: {street: 'Main Street', number: 123, city: 'Anytown', country: 'USA}}
// OUTPUT: the string 'Bob Smith lives at 123 Main Street, Anytown, USA'
// REQS: use destructuring and template literals

export const printAddress = ({ name, address: { street, number, city, country } }) => {
  return `${name} lives at ${number} ${street}, ${city}, ${country}`
}

// REFACTOR CHALLENGE
// Refactor this function so that all values in the object are destructured
// as part of the function definitions (i.e. there should be no dots in the template literals)
// export const printUserInfo = (user) => {
//   return `
//     Username: ${user.username},
//     Full Name: ${user.name.first} ${user.name.last},
//     Favorite Color: ${user.info.favorites.color},
//     Favorite Food: ${user.info.favorites.food},
//     Pet Name: ${user.info.pet.name},
//     Address: ${user.info.address.number} ${user.info.address.street}, ${user.info.address.city}, ${user.info.address.country}
//     `
// }
export const printUserInfo = ({
  username,
  name: { first, last },
  info: {
    favorites: { food, color },
    pet: { type, name },
    address: { street, number, city, country },
  },
}) => {
  return `
    Username: ${username},
    Full Name: ${first} ${last},
    Favorite Color: ${color},
    Favorite Food: ${food},
    Pet Name: ${name},
    Address: ${number} ${street}, ${city}, ${country}
    `
}

// INPUT: an unknown number of input arguments, all numbers
// OUTPUT: their sum
// REQS: use rest parameters
//  getSum(1, 2, 3) === 6
//  getSum(1, 2, 3, 4, 5) === 15
export const getSum = (...nums) => {
  let total = 0
  for (const num of nums) {
    total += num
  }
  return total
}

// INPUT: an unknown number of arguments
// OUTPUT: an array with the first two arguments destructured and the remaining in a nested array
// REQS: use rest parameters
// getFirstTwoArgs(1, 2, 3, 4, 5) should return [1, 2, [3, 4, 5]]
// getFirstTwoArgs('a', 'b', 'c', 'd') should return ['a', 'b', ['c', 'd']]
export const getFirstTwoArgs = (a, b, ...rest) => {
  let result = [a, b, rest]
  console.log(result)
  return result
}

// INPUT: an object with the following structure
// {
//   shoes: ['Air Max', 'Air Force', 'Air Jordan', 'Air Mag', 'Pegasus', 'Kobe'],
//   slogan: 'Just Do It',
//   logo: 'Swoosh',
//   headquarters: 'Portland',
// }
// OUTPUT: an object with an additional attribute called sneakerCount which appends the number of shoes
// in the shoes array
// {
//   shoes: ['Air Max', 'Air Force', 'Air Jordan', 'Air Mag', 'Pegasus', 'Kobe'],
//   slogan: 'Just Do It',
//   logo: 'Swoosh',
//   headquarters: 'Portland',
//   sneakerCount: 6
// }
// REQS:
//    use destructuring to get the children attribute
//    return a NEW object, do not modify the object passed in to the function
//    use spread operator to create a new object

export const addSneakerCount = ({ shoes, slogan, logo, headquarters }) => {
  const shoeList = [...shoes]
  const sneakerCount = shoeList.length
  return { shoeList, slogan, headquarters, sneakerCount }
}

// INPUT: brands from data.js
// OUTPUT: the brand names listed
// REQS: use Object.keys to solve
export const getBrandNames = (brands) => {
  return Object.keys(brands)
}

// INPUT: brands from data.js
// OUTPUT: total number of sneaker types across all brands (14)
export const totalSneakerCount = () => {}

// INPUT: An object
// OUTPUT: An array with key value pairs converted to arrays
// EXAMPLE:
// convertToArray({ a: 1, b: 2 }) => [["a", 1], ["b", 2]]
// convertToArray({}) => []
// Source: https://edabit.com/challenge/pPNAs5PvB3WvnDwDM

export const convertToArray = () => {}

//
