function removeDuplicate(nums) {
    const r = []
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 2]) {
            r.push(nums[i])
        }
    }
    return r
}
nums = [0, 0, 0, 1, 1, 1, 2, 3, 4, 4, 4, 4]
console.log(removeDuplicate(nums))