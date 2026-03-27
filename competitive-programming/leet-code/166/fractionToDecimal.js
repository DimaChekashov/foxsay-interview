var fractionToDecimal = function (numerator, denominator) {
  if (numerator === 0) return "0";
  let res = "";
  if (Math.sign(numerator) !== Math.sign(denominator)) res += "-";

  let num = Math.abs(numerator);
  let den = Math.abs(denominator);
  res += Math.floor(num / den);
  num %= den;
  if (num === 0) return res;

  res += ".";
  const map = new Map();

  while (num !== 0) {
    if (map.has(num)) {
      const idx = map.get(num);
      return res.slice(0, idx) + "(" + res.slice(idx) + ")";
    }
    map.set(num, res.length);
    num *= 10;
    res += Math.floor(num / den);
    num %= den;
  }

  return res;
};