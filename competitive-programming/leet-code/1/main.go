package main

import "fmt"

func main() {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))
	fmt.Println(twoSum([]int{-1,-2,-3,-4,-5}, -8))
}

func twoSum(nums []int, target int) []int {
	numsMap := make(map[int]int)

	for idx, num := range nums {
		numsMap[num] = idx
	}

	for idx, num := range nums {
		comp := target - num
		if numsMap[comp] != 0 && numsMap[comp] != idx {
			return []int{idx, numsMap[comp]}
		}
	}

	return []int{}
}
