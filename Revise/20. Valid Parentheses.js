//********************** BEST SOLUTION **********************************/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s) => {
  if (s.length % 2 != 0) return false;
  var stack = [];
  let isValid = false;
  for (let c of s) {
    if (c == "(") {
      stack.push(")");
    } else if (c == "[") {
      stack.push("]");
    } else if (c == "{") {
      stack.push("}");
    } else if (c != stack.pop()) {
      return false;
    }
  }
  stack.length == 0 ? (isValid = true) : "";
  return isValid;
};
