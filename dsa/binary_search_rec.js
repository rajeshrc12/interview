function binarySearch(arr, start, end, key) {
    let mid = Math.floor((start + end) / 2)
    if (start > end) {
        return -1
    }
    if (key === arr[mid]) {
        return mid
    }
    if (key < arr[mid]) {
        return binarySearch(arr, start, mid - 1, key)
    }
    else {
        return binarySearch(arr, mid + 1, end, key)
    }
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0, 5, 2))
