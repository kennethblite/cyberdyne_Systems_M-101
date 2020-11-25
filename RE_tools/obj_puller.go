package main


import ("strconv"
	"io/ioutil"
	"regexp"
	"fmt"
	"encoding/hex")

func main(){
	data, err := ioutil.ReadFile("Rondyo.Chatman.GUI.Manager") 
	if err != nil{
		fmt.Println(err)
		return 
	}
	d := string(data)
	rs := regexp.MustCompile(`PublicKeyToken=(.*)`)
	token := rs.FindAllStringSubmatch(d,-1)
	if err != nil{
		fmt.Println(err)
		return 
	}
	t, err := hex.DecodeString(token[0][1])
	if err != nil{
		fmt.Println(err)
		return 
	}
	fmt.Println("Your token is", token[0][1])
	dec_token := make([]rune, 0)
	for _, v := range t{
		fmt.Printf("%02x ", v)
		dec_token = append(dec_token, (rune(v)<<4)^rune(v))
	}
	fmt.Println()
	fmt.Println("Creating the decryption key from the token")
	for _, v := range dec_token{
		fmt.Printf("%04x ", v)
	}
	fmt.Println()
	fmt.Println("Finding Encrypted Strings")
	re := regexp.MustCompile(`obj = "(.*?)";`)
	found := re.FindAllStringSubmatch(d,-1)
	for _, v := range found{
		fmt.Println(v[1])
		in, err := strconv.Unquote("\""+v[1]+"\"")
		if err != nil{
			fmt.Println(err)
		}
		Encrypted([]rune(in), dec_token)
	}
}


func Encrypted(input []rune, key []rune){
	out := make([]rune, len(input))
	start:= 0
	for i:=0; i < len(input); {
		out[i] = input[i]^key[(i+start)%len(key)]
		if out[i]>>8 != 0{
			i = 0
			start++
			continue
		}
		i++
	}
	fmt.Println(string(out))
}
