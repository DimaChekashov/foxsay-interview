package main

import "fmt"

func main() {
	fmt.Println(strStr("sadbutsad", "sad"))
}

func strStr(haystack string, needle string) int {
	n := len(needle)
	if n == 0 {
		return 0
	}
	h := len(haystack)
	if h < n {
		return -1
	}

	for i := 0; i <= h-n; i++ {
		if haystack[i] == needle[0] {
			match := true
			for j := 1; j < n; j++ {
				if haystack[i+j] != needle[j] {
					match = false
					break
				}
			}
			if match {
				return i
			}
		}
	}
	return -1
}
