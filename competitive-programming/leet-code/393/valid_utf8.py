from typing import List

def valid_utf8(data: List[int]) -> bool:
    i = 0

    while i < len(data):
        byte = data[i]
        n_bytes = 0

        if (byte >> 7) == 0:
            n_bytes = 1
        elif (byte >> 5) == 0b110:
            n_bytes = 2
        elif (byte >> 4) == 0b1110:
            n_bytes = 3
        elif (byte >> 3) == 0b11110:
            n_bytes = 4
        else:
            return False

        if i + n_bytes > len(data):
            return False

        for j in range(1, n_bytes):
            if (data[i + j] >> 6) != 0b10:
                return False

        i += n_bytes

    return True