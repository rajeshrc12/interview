function binarySearch(key){
    const arr=[1,2,3,4,5,6]
    let start=0,end=arr.length-1
    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if(key===arr[mid]){
            return mid
        }
        else if(key<arr[mid]){
            end=mid-1
        }
        else{
            start=mid+1
        }
    }
    return -1
}
console.log(binarySearch(7))
