package main

import "fmt"

func main() {
	fmt.Println(lengthOfLastWord("Hello World"))
}

func lengthOfLastWord(s string) int {
	const EMPTY byte = ' '
	var length int = 0
	var isWord bool = false

	for i := len(s) - 1; i >= 0; i-- {
		if s[i] == EMPTY && isWord {
			break
		} else if s[i] == EMPTY {
			continue
		}

		isWord = s[i] != EMPTY

		length++
	}

	return length
}
