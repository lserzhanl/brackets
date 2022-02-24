module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let existBracket = {};

  for(let i = 0; i < bracketsConfig.length; i += 1) {
    existBracket[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  stack.push(str.charAt(0));

  for(let i = 1; i < str.length; i += 1) {
    if(str.charAt(i) === existBracket[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      stack.push(str.charAt(i)); 
    }
  }
  if (stack.length > 0) {return false;}
  return true;
}
