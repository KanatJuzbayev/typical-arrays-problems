
exports.min = function min (array) {
  if ( !array || array.length == 0) {
    return 0;
} 
  const minValue = Math.min(...array)
  return minValue;
}

exports.max = function max (array) {
    if ( !array || array.length == 0) {
    return 0;
} 
  const maxValue = Math.max(...array)
  return maxValue;
}

exports.avg = function avg (array) {
    if ( !array || array.length == 0) {
    return 0;
} 
  var sum = array.reduce(function(a, b) {
        return a + b;
    }, 0);
  return sum/array.length ;
}
