function validPallindrome(str) {
    let revstr = ""
    for (let i = 0; i < str.length; i++) {
        const sl = str[i].toLowerCase()
        if (sl >= "a" && sl <= "z" || sl >= "0" && sl <= "9")
            revstr += sl
    }
    return revstr === revstr.split("").reverse().join("")
}
const str = "A man, a plan, a canal: Panama"
console.log(validPallindrome(str))