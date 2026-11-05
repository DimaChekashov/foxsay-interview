def magical_string(n: int) -> int:
    if n == 0:
        return 0

    s = [1, 2, 2]
    i = 2

    while len(s) < n:
        next_val = 3 - s[-1]
        for _ in range(s[i]):
            if len(s) >= n:
                break
            s.append(next_val)
        i += 1

    return s[:n].count(1)