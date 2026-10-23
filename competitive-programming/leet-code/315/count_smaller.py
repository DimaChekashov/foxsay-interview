from typing import List


def count_smaller(nums: List[int]) -> List[int]:
    li = []
    sorted_list = []

    for i in range(len(nums) - 1, -1, -1):
        index = insert(sorted_list, nums[i])
        li.append(index)
        sorted_list.insert(index, nums[i])

    return li[::-1]


def insert(arr: List[int], num: int) -> int:
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] < num:
            left = mid + 1
        else:
            right = mid - 1

    return left