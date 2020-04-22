function mergeSort (arr) {
  if (arr.length<=1) return arr;
  let middle = Math.floor((arr.length)/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);
  return arr;
}

function merge(left, right, arr) {
  let index = 0;
  while(left.length && right.length) {
    left[0]<right[0] ? arr[index] = left.shift() : arr[index] = right.shift();
    index++;
  }
  if (left.length) {
    while (left.length) {
      arr[index] = left.shift();
      index++;
    }
  }
  if (right.length) {
    while (right.length) {
      arr[index] = right.shift();
      index++;
    }
  }
}
