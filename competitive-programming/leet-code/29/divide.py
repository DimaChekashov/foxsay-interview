def divide(dividend: int, divisor: int) -> int:
    if divisor == 0:
        return 0
    if dividend == 0:
        return 0
    if dividend == -2147483648 and divisor == -1:
        return 2147483647

    is_positive = True
    if (dividend > 0) != (divisor > 0):
        is_positive = False

    divisor = abs(divisor)
    dividend = abs(dividend)

    result = 0

    while dividend >= divisor:
        count = 1
        base = divisor
        while base <= (dividend >> 1):
            base = base << 1
            count = count << 1
        result += count
        dividend -= base

    if not is_positive:
        result = -result
    return result