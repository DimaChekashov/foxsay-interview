package main

import "fmt"

func main() {
	fmt.Println(isValid("()"))
}

func isValid(s string) bool {
	if len(s) < 2 {
		return false
	}

	chars := make([]rune, 0)

	for _, c := range s {
		if len(chars) > 0 {
			last := chars[len(chars)-1]

			if c == '(' || c == '{' || c == '[' {
				chars = append(chars, c)
			} else if (last == '(' && c != ')') ||
				(last == '{' && c != '}') ||
				(last == '[' && c != ']') {
				return false
			} else {
				chars = chars[:len(chars)-1]
			}
		} else {
			if c == ')' || c == '}' || c == ']' {
				return false
			}
			chars = append(chars, c)
		}
	}

	return len(chars) == 0
}
