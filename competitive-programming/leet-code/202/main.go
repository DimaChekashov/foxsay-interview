package main

import (
	"fmt"
)

func main() {
	fmt.Println(isHappy(19))
}

func isHappy(n int) bool {
	x, y := n, n
	for {
		x = digitSum(x)
		y = digitSum(digitSum(y))
		if x == 1 || y == 1 {
			return true
		}

		if x == y {
			return false
		}
	}
}

func digitSum(n int) int {
	var digitSlice []int
	for n != 0 {
		digitSlice = append(digitSlice, n%10)
		n /= 10
	}

	var sum int
	for _, v := range digitSlice {
		sum += v * v
	}

	return sum
}
