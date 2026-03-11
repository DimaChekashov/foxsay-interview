class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleaned = []
        for char in s.lower():
            if char.isalnum():
                cleaned.append(char)
        
        left, right = 0, len(cleaned) - 1
        while left < right:
            if cleaned[left] != cleaned[right]:
                return False
            left += 1
            right -= 1
        return True