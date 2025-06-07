package main

import (
	"fmt"
)

func main() {
	fmt.Println(singleNumber([]int{2, 2, 1}))
}

func singleNumber(nums []int) int {
	xor_result := 0

	for _, number := range nums {
		xor_result ^= number
	}

	return xor_result
}
