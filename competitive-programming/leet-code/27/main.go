package main

import "fmt"

func main() {
	fmt.Println(removeElement([]int{3, 2, 2, 3}, 3))
}

func removeElement(nums []int, val int) int {
	var k int

	for i := 0; i < len(nums); i++ {
		if nums[i] != val {
			k++
		} else {
			nums = append(nums[:i], nums[i+1:]...)
			i--
		}
	}

	return k
}
