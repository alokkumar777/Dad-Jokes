// forEach

const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


console.log(numberArr.some(num => num >= 5));

// let powerOfNumberArr = numberArr.map(function (num) {
//   return num ** 2;
// });

// console.log(numberArr);
// console.log(powerOfNumberArr);

// let newArr = numberArr.filter(n => {
//   return n < 5;
// })
// console.log(newArr);



// numberArr.forEach(function (el) {
//   if (el % 2 == 0) {
//     console.log(el);
//   }
// });

// for (el of numberArr) {
//     if (el % 2 == 0) {
//         if (el == 6) {
//             break;
//         }
//         console.log(el)
//     }
// }

// O(n) TC
// O(1) SC

const movies = [
  {
    title: "Fifty shades of grey",
    rating: 9,
  },
  {
    title: "Honour Society",
    rating: 7,
  },
  {
    title: "Five meter apart",
    rating: 9,
  },
  {
    title: "Friends",
    rating: 10,
  },
];

// movies.forEach(function(movie) {
//     console.log(`${movie.title} and rating is ${movie.rating}`)
// })

// let updateRating = movies.map(function(movie) {
//     return {
//         title: movie.title,
//         rating: `${movie.rating} out of 10`
//     }
// })

// let updateRating = movies.map((movie) => {
//   return {
//     title: movie.title,
//     rating: `${movie.rating} out of 10`,
//   };
// });

// console.log(updateRating);
// console.log(movies);

// var sqr = function(x) {
//   return x * x;
// }

// function sqr(x) {
//   return x * x;
// }

// setTimeout


// filter

