package main

import("io/ioutil"
	"fmt"
	_"strings"
	"regexp"
	)


func main(){
	/*
		HOPEFULLY THIS WILL REBUILD CFF STUFFS
	*/
	/*data, err := ioutil.ReadFile("decoded_str.txt")
	if err != nil{
		fmt.Println(err)
		return
	}
	obf_cur_map := make(map[string]string)
	entries := strings.Split(string(data), "\n")*/
	ch, err := ioutil.ReadFile("Rondyo.Chatman.SearchEngine")
	if err != nil{
		fmt.Println(err)
		return
	}
	change := string(ch)
	re1 := regexp.MustCompile(`(case .*?:|default:)`)
	re2 := regexp.MustCompile(`num = .*?;`)
	cas1 := re1.FindAllString(change, -1)
	cas2 := re2.FindAllString(change, -1)
	for i, _ := range cas1{
		fmt.Println(cas1[i], cas2[i])
	}
	//re = regexp.MustCompile(`num = .*?;`)
	//for _, v := range re.FindAllString(change, -1){
	//	fmt.Println(v)
	//}
	/* re1 := regexp.MustCompile(`ႰႭႭ.Ⴅ.ႤႥႥ\(.*?\)`)
	for _, v := range re1.FindAllString(change, -1){
		//fmt.Println(v)
		change =  strings.ReplaceAll(change, v, obf_cur_map[v])
	}*/

	//fmt.Println(change)
	//This won't work

}
