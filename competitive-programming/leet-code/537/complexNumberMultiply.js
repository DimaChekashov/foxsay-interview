var complexNumberMultiply = function(num1, num2) {
    const parse = (str) => {
        const [real, imag] = str.split("+");
        return [parseInt(real), parseInt(imag)];
    }

    const [a, b] = parse(num1);
    const [c, d] = parse(num2);

    const real = a * c - b * d;
    const imag = a * d + b * c;

    return `${real}+${imag}i`;
};