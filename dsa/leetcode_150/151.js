function reverseWords(str) {
    str = str.trim()
    let s1 = "", s2 = ""
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === " " && str[i - 1] === " ")
            continue
        if (str[i] === " " || i === 0) {
            if (i === 0) {
                s1 = str[i] + s1
            }
            s2 = s2 + s1 + " "
            s1 = ""
        }
        else
            s1 = str[i] + s1
    }
    return s2.trim()
}
console.log(reverseWords("  hello world  "))