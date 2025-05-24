package main

import "fmt"

func main() {
	fmt.Println(scoreOfString("hello"))
}

func scoreOfString(s string) int {
    var sum int

    for i := 0; i < len(s) - 1; i++ {
        num := int(s[i]) - int(s[i+1])
        
        if num < 0 {
            sum += -num
        } else {
            sum += num
        }
    }

    return sum
}