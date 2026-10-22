tdef can_measure_water(x: int, y: int, target: int) -> bool:
    if target > x + y:
        return False
    if target == 0:
        return True

    stack = [(0, 0)]
    visited = set()

    while stack:
        a, b = stack.pop()

        if a + b == target:
            return True

        key = (a, b)
        if key in visited:
            continue
        visited.add(key)

        stack.append((x, b))
        stack.append((a, y))

        stack.append((0, b))
        stack.append((a, 0))

        pour_x_to_y = min(a, y - b)
        stack.append((a - pour_x_to_y, b + pour_x_to_y))

        pour_y_to_x = min(b, x - a)
        stack.append((a + pour_y_to_x, b - pour_y_to_x))

    return False