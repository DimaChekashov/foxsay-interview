def last_remaining(n: int) -> int:
    def helper(x: int, step: int, count: int, left: bool) -> int:
        if count < 2:
            return x
        
        increment = step if (left or count % 2 == 1) else 0
        
        return helper(x + increment, step * 2, count // 2, not left)

    return helper(1, 1, n, True)
