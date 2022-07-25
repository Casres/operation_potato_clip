const numbers = [
  41, 21, 24, 28, 1, 40, 41, 32, 21, 33, 50, 5, 34, 5, 21, 21, 43, 43, 21, 4,
  49, 24,
];

// const mostDuplicates = (arr) => {
//   let mostValue;
//   let mostCount = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let counter = 0;

//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         counter++;
//       }
//     }

//     if (counter > mostCount) {
//       mostCount = counter;
//       mostValue = arr[i];
//     }
//   }
//   return `${mostValue} appeared ${mostCount} times`;
// };

// console.log(mostDuplicates(numbers));

// module.exports = { mostDuplicates };

const optimizedDuplicates = (arr) => {
  // empty array called map
  const map = {};

  // loops through the array
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    // if arr[i] is not in map
    if (map[value] === undefined) {
      // then create a new key/value pair on map and = it to 1
      map[value] = 1;
    } else {
      // make a new key/value pair and increment by 1
      map[value]++;
    }
  }

  let mostValue;
  let mostCount = 0;

  // loop over obj. key/values
  for (const value in map) {
    // if value > current most appearing Count
    // update "most" variables count
    mostCount = map[value];
    mostValue = value;
  }

  return `${mostValue} appeared ${mostCount} times.`;
};

module.exports = optimizedDuplicates;

console.log(optimizedDuplicates(numbers));
