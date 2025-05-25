package main

import "fmt"

func main() {
	fmt.Println(longestCommonPrefix([]string{"flower", "flow", "flight"}))
}

func longestCommonPrefix(strs []string) string {
	if len(strs) <= 1 {
		return strs[0]
	}
	var count int

	outerLoop:
    for i := 0; i < len(strs[0]); i++ {
        for j := 1; j < len(strs); j++ {
            if i >= len(strs[j]) || strs[0][i] != strs[j][i] {
                break outerLoop
            }
        }
        count++
    }

	return strs[0][:count]
}
