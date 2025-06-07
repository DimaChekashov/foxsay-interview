package main

import (
	"fmt"
)

func main() {
	fmt.Println(convertToTitle(1))
}

func convertToTitle(columnNumber int) string {
	var result string

	for columnNumber > 0 {
		columnNumber--
		charCode := 'A' + rune(columnNumber%26)
		result = string(charCode) + result
		columnNumber /= 26
	}

	return result
}
