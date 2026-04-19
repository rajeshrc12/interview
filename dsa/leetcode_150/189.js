// function rotateArray(nums, k) {
//     let n = nums.length;
//     for (let i = 0; i < k; i++) {
//         nums.unshift(nums.pop());
//     }
//     return nums
// }
// time: o(n*k)
// space: o(1)

function reverse(nums, s, e) {
    while (s < e) {
        const temp = nums[s]
        nums[s] = nums[e]
        nums[e] = temp
        s++
        e--
    }
    return nums
}
function rotateArray(nums, k) {
    const len = nums.length
    if (k > len) {
        k %= len
        if (!k)
            return nums
    }

    reverse(nums, 0, len - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, len - 1)
    return nums
}
const nums = [1, 2, 3, 4, 5], k = 3
console.log(nums, k)
console.log(rotateArray(nums, k))

// time : o(n)
// space : o(1)