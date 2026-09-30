def get_hint(secret: str, guess: str) -> str:
    map_count = {}
    bulls = 0
    cows = 0

    for char in secret:
        map_count[char] = map_count.get(char, 0) + 1

    for i in range(len(guess)):
        if guess[i] == secret[i]:
            bulls += 1
            if map_count[guess[i]] <= 0:
                cows -= 1
        elif map_count.get(guess[i], 0) > 0:
            cows += 1

        map_count[guess[i]] = map_count.get(guess[i], 0) - 1

    return f"{bulls}A{cows}B"