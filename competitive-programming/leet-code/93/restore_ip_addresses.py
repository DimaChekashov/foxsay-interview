from typing import List

def restore_ip_addresses(s: str) -> List[str]:
    result = []

    def is_valid(segment: str) -> bool:
        if len(segment) > 1 and segment[0] == '0':
            return False
        num = int(segment)
        return 0 <= num <= 255

    def backtrack(start: int, current: List[str]) -> None:
        if len(current) == 4:
            if start == len(s):
                result.append('.'.join(current))
            return

        for length in range(1, 4):
            if start + length <= len(s):
                segment = s[start:start + length]
                if is_valid(segment):
                    current.append(segment)
                    backtrack(start + length, current)
                    current.pop()

    backtrack(0, [])
    return result