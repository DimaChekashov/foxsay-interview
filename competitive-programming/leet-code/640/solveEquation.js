var solveEquation = function(equation) {
    const [left, right] = equation.split('=');

    const parse = (side) => {
        let coeff = 0, constVal = 0, num = '', sign = 1;
        for (let i = 0; i <= side.length; i++) {
            const char = side[i] || '+';
            if (char === '+' || char === '-') {
                if (num) constVal += sign * parseInt(num);
                sign = char === '+' ? 1 : -1;
                num = '';
            } else if (char === 'x') {
                coeff += sign * (num === '' ? 1 : parseInt(num));
                num = '';
            } else {
                num += char;
            }
        }
        return [coeff, constVal];
    };

    const [lCoeff, lConst] = parse(left);
    const [rCoeff, rConst] = parse(right);
    const coeff = lCoeff - rCoeff;
    const constant = rConst - lConst;

    if (coeff === 0) return constant !== 0 ? "No solution" : "Infinite solutions";
    return `x=${constant / coeff}`;
};