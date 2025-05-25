package main

import "fmt"

func main() {
	fmt.Println(romanToInt("XIII"))
}

func romanToInt(s string) int {
	var total, num int

	for i := len(s) - 1; i >= 0; i-- {
		switch s[i] {
		case 'I':
			num = 1
		case 'V':
			num = 5
		case 'X':
			num = 10
		case 'L':
			num = 50
		case 'C':
			num = 100
		case 'D':
			num = 500
		case 'M':
			num = 1000
		}

		if 4*num < total {
			total -= num
		} else {
			total += num
		}
	}

	return total
}
