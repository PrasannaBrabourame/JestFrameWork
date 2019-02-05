/* # Exercice: Perfect Squares
 *
 * ## Explanation:
 * You must code a function that given a lower bound and upper bound returns an array containing all
 * the perfect squares (see Further Notice) between the lower bound and the upper bound included.
 * The array must be sorted from lower to upper.
 *
 * ## Example:
 *```
 *perfectSquares(3, 15) === [4, 9]
 *```
 *
 * ## Expected Time
 * You should spend around 10 minutes on this exercice
 *
 * ## Further Notice
 * - You have more examples in <root>/validations/1-fizzBuzz.validation.js
 * - An integer n is said to be a perfect squares if there exists an integer i such that `i * i = n`
 *For example 4 = 2 * 2 is a perfect squares but 5 isn't.
 */

function perfectSquares(lower, upper) {
    let result = [];
    for(let i = lower;i<=upper ;i++){
      if(i === 0){
        result.push(i)
      } 
      else if(i % Math.sqrt(i) === 0){
        result.push(i)
      }
    }
    return result
  }
  
  module.exports = perfectSquares
  