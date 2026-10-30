def length_longest_path(input: str) -> int:
    lines = input.split('\n')
    depth_map = {0: 0}
    max_len = 0

    for line in lines:
        level = line.count('\t')
        name = line[level:]

        if '.' in name:
            max_len = max(max_len, depth_map[level] + len(name))
        else:
            depth_map[level + 1] = depth_map[level] + len(name) + 1

    return max_len