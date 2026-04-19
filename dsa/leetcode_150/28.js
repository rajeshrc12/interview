function firstOccurance(h, n) {
    let j = 0, index = -1
    if (n.length > h.length)
        return index
    for (let i = 0; i < h.length; i++) {
        if (h[i] === n[j]) {
            if (j === 0) {
                index = i
            }
            j++
        }
        else if (j === n.length)
            break
        else {
            j = 0
            index = -1
        }
    }
    return index
}

console.log(firstOccurance("mississippi", "issip"))