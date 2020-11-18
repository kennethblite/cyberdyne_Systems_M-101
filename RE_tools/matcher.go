package main

import("io/ioutil"
	"fmt"
	"strings"
	"regexp"
	)


func main(){
	data, err := ioutil.ReadFile("decoded_str.txt")
	if err != nil{
		fmt.Println(err)
		return
	}
	//fmt.Println(string(data))
	obf_cur_map := make(map[string]string)
	obf_first_func := "ႰႤႷ.Ⴍ.ႥႳႳ("
	obf_second_func := "ႰႭႭ.Ⴅ.ႤႥႥ("
	obf_cur_pre := obf_first_func
	entries := strings.Split(string(data), "\n")
	//fmt.Println(entries)
	//fmt.Println(len(entries))
	for _, v := range entries {
		if strings.Contains(v, ":"){
			e := strings.Split(v, ": ")
			//fmt.Println(e[0])
			//fmt.Println(e[1])
			obf_cur_map[obf_cur_pre+e[0]+")"] = e[1]
		}
		if strings.Contains(v, "Second Func"){
			obf_cur_pre = obf_second_func
		}
	}
	//fmt.Println(obf_cur_map)
	ch, err := ioutil.ReadFile("Rondyo.Chatman.GUI.Infrastructure.cs")
	if err != nil{
		fmt.Println(err)
		return
	}
	change := string(ch)
	re := regexp.MustCompile(`ႰႤႷ.Ⴍ.ႥႳႳ\(.*?\)`)
	for _, v := range re.FindAllString(change, -1){
		//fmt.Println(v)
		change = strings.ReplaceAll(change, v, obf_cur_map[v])
	}
	 re1 := regexp.MustCompile(`ႰႭႭ.Ⴅ.ႤႥႥ\(.*?\)`)
	for _, v := range re1.FindAllString(change, -1){
		//fmt.Println(v)
		change =  strings.ReplaceAll(change, v, obf_cur_map[v])
	}

	fmt.Println(change)

}
