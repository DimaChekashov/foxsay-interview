package main

import "fmt"

func main() {
	fmt.Println(climbStairs(2))
}

func climbStairs(n int) int {
	a, b := 1, 1
	for ; n > 1; n-- {
		a, b = b, a+b
	}
	return b
}
