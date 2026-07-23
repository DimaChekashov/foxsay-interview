import re

def strong_password_checker(password: str) -> int:
    n = len(password)

    has_lower = bool(re.search(r'[a-z]', password))
    has_upper = bool(re.search(r'[A-Z]', password))
    has_digit = bool(re.search(r'\d', password))
    
    missing_types = (not has_lower) + (not has_upper) + (not has_digit)

    repeats = []
    i = 0
    while i < n:
        j = i
        while j < n and password[j] == password[i]:
            j += 1
        length = j - i
        if length >= 3:
            repeats.append(length)
        i = j

    if n < 6:
        return max(missing_types, 6 - n)

    if n > 20:
        deletions_needed = n - 20
        deletions_left = deletions_needed
        changes = 0

        repeats.sort()
        
        for length in repeats:
            if length >= 3 and deletions_left > 0:
                reduce_by = min(length - 3, deletions_left)
                length -= reduce_by
                deletions_left -= reduce_by
            
            if length >= 3:
                changes += length // 3

        return deletions_needed + max(changes, missing_types)

    changes = sum(length // 3 for length in repeats)
    return max(changes, missing_types)