package main

import (
	"fmt"
	"log"
	"sort"
)

func main() {
	var arr = make([]int, 3)

	for i := 0; i < len(arr); i++ {
		_, err := fmt.Scan(&arr[i])
		if err != nil {
			log.Fatal(err)
		}

	}

	sort.Ints(arr)

	fmt.Println(arr[1])
}
