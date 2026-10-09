def is_additive_number(num: str) -> bool:
    def is_valid(a: int, b: int, s: str) -> bool:
        if not s:
            return True
        total = str(a + b)
        return s.startswith(total) and is_valid(b, int(total), s[len(total):])

    n = len(num)
    for i in range(1, n):
        for j in range(i + 1, n):
            a = num[:i]
            b = num[i:j]

            if (a.startswith("0") and len(a) > 1) or (b.startswith("0") and len(b) > 1):
                continue

            if is_valid(int(a), int(b), num[j:]):
                return True

    return False