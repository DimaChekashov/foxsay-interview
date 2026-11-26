def complex_number_multiply(num1: str, num2: str) -> str:
    def parse(s: str) -> tuple[int, int]:
        real, imag = s.split("+")
        return int(real), int(imag[:-1])

    a, b = parse(num1)
    c, d = parse(num2)

    real = a * c - b * d
    imag = a * d + b * c

    return f"{real}+{imag}i"