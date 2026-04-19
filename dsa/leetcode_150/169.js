function getMajorityNumber(nums) {
    const obj = {}
    let count = 0, num = null
    for (const n of nums) {
        if (obj[n]) {
            obj[n]++
        }
        else {
            obj[n] = 1
        }
        if (obj[n] > count) {
            count = obj[n]
            num = n
        }

    }
    return num
}
const nums = [1, 1, 2, 2, 2, 3, 4, 5]

console.log(getMajorityNumber(nums))