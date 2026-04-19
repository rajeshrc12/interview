function mergeSortedArray(nums1, m, nums2, n) {
    let i = m - 1;       // last valid element in nums1
    let j = n - 1;       // last element in nums2
    let k = m + n - 1;   // last position in nums1

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    return nums1;
}

const nums1 = [1, 2, 3, 0, 0, 0], m = 3;
const nums2 = [2, 5, 6], n = 3;

console.log(mergeSortedArray(nums1, m, nums2, n));