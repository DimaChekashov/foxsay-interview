package main

import "fmt"

func main() {
	fmt.Println(plusOne([]int{1, 2, 3}))
}

func plusOne(digits []int) []int {
	n := len(digits)

	for i := n - 1; i >= 0; i-- {
		if digits[i] < 9 {
			digits[i] += 1
			return digits
		} else {
			digits[i] = 0
		}
	}

	var newDigits = make([]int, n+1)
	newDigits[0] = 1
	return newDigits
}
