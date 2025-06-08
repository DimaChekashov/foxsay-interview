package main

import (
	"fmt"
)

func main() {
	fmt.Println(hammingWeight(11))
}

func hammingWeight(n int) int {
	val := 0

	for n > 0 {
		val += int(n & 1)
		n = n >> 1
	}

	return val
}
