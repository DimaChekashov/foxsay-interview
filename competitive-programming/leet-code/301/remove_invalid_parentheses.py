from typing import List, Set

def remove_invalid_parentheses(s: str) -> List[str]:
    def is_valid(string: str) -> bool:
        count = 0
        for ch in string:
            if ch == '(':
                count += 1
            elif ch == ')':
                count -= 1
            if count < 0:
                return False
        return count == 0

    res: List[str] = []
    visited: Set[str] = {s}
    queue: List[str] = [s]

    while queue:
        next_queue: List[str] = []
        
        for string in queue:
            if is_valid(string):
                res.append(string)
        
        if res:
            return res
        
        for string in queue:
            for i in range(len(string)):
                if string[i] not in '()':
                    continue
        
                new_string = string[:i] + string[i + 1:]
                if new_string not in visited:
                    visited.add(new_string)
                    next_queue.append(new_string)
        
        queue = next_queue

    return [""]