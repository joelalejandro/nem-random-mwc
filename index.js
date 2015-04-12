var randomMwc = module.exports = function(options) {
  var defaultOptions = { 
    seeds: [
      new Date().valueOf() + Math.random(), 
      parseInt(new Date().valueOf().toString().split("").reverse().join("")) + Math.random()
    ],
    includeNegativeNumbers: false
  };
  options = options || defaultOptions;
  var mw = options.seeds[0], mz = options.seeds[1];
  mw = 36969 * (mz & 65535) + (mz >> 16);
  mz = 18000 * (mw & 65535) + (mw >> 16);
  var result = parseFloat("0." + Math.abs(((mz << 16) + mw)));
  if (options.includeNegativeNumbers) {
    if (Math.random() >= 0.5) {
      result *= -1;
    }
  }
  return result;
}