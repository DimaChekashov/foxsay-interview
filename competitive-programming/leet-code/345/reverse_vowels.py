def reverse_vowels(s: str) -> str:
    vowels = set("aeiouAEIOU")
    arr = list(s)
    left, right = 0, len(arr) - 1

    while left < right:
        while left < right and arr[left] not in vowels:
            left += 1
        while left < right and arr[right] not in vowels:
            right -= 1

        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1

    return "".join(arr)