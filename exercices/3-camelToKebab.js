/* # Exercice: Camel To Kebab
 *
 * ## Explanation:
 * You must code a function that transforms a string from camelCase (see Further Notice) to 
 * kebab-case (see Further Notice). This function must not break abreviations.
 *
 * ## Example:
 *```
 *camelToKebab('CamelCaseString') === 'camel-case-string'
 *camelToKebab('CamelCaseStringWithABREV') === 'camel-case-string-with-abrev'
 *camelToKebab('CamelCaseStringWithABREVInCenter') === 'camel-case-string-with-abrev-in-center'
 *```
 *
 * ## Expected Time
 * You should spend around 15 minutes on this exercice
 *
 * ## Further Notice
 * - You have more examples in <root>/validations/1-fizzBuzz.validation.js
 * - See [camelCase](https://en.wikipedia.org/wiki/Camel_case)
 * - See [kebabCase](http://wiki.c2.com/?KebabCase)
 */

function camelToKebab(text) {
    if (text === null || text === undefined) {
      return text;
    }
    var result = "";
    var upper = 0;
    var numeric = undefined;
    var string = String(text);
    for (var i = 0; i < string.length; i++) {
      var ch = string[i];
      var chLower = ch.toLowerCase();
      if (ch !== chLower) {
        var prev = result[result.length - 1];
        if (upper > 1 && result.length > 1) {
          result = result.slice(0, result.length - 2) + prev;
        }
        if (result.length && prev !== "-" &&
          prev !== " " && prev !== "\t" && prev !== "\r" && prev !== "\n"
        ) {
          result += "-";
        }
        result += chLower;
        upper++;
        numeric = false;
      } else if (
        ch === "0" || ch === "1" || ch === "2" || ch === "3" ||
        ch === "4" || ch === "5" || ch === "6" || ch === "7" ||
        ch === "8" || ch === "9"
      ) {
        if (numeric === false && result[result.length - 1] !== "-") {
          result += "-";
        }
        result += ch;
        upper = 0;
        numeric = true;
      } else if (numeric && result[result.length - 1] !== "-") {
        result += "-" + ch;
        upper = 0;
        numeric = false;
      } else {
        result += ch;
        upper = 0;
        numeric = false;
      }
    }
    if (upper > 1 && result.length > 1) {
      result = result.slice(0, result.length - 2) + result[result.length - 1];
    }
    return result;
  }
  
  module.exports = camelToKebab
  