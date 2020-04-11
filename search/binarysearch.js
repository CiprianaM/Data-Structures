//O(log n)

function binarySearchRecursive (arr, elem, start, stop) {
  if (arr[start]===elem) {
    return start;
  }
  if (start>=stop) {
    return -1;
  };
  let mid = Math.floor((start+stop)/2);
  if (elem>arr[mid]) {
    return binarySearchRecursive(arr, elem, mid+1, stop)
  } else {
    return binarySearchRecursive(arr, elem, start, mid);
  }
}

console.log(binarySearchRecursive([0, 3, 6, 8, 9, 12], 2, 0, 5));