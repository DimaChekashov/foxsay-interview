package main

import "fmt"

func main() {
	fmt.Println(mySqrt(4))
}

func mySqrt(x int) int {
	left, right := 0, x+1

	for left < right {
		mid := left + (right-left)/2

		if mid*mid > x {
			right = mid
		} else {
			left = mid + 1
		}
	}

	return left - 1
}
