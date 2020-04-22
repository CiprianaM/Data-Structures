const testArr = [3, 7, 0, 2, 4, 1, 9, 5];
const test2Arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function partition(items, left, right) {
  const pivot = items[Math.floor((left + right) / 2)];

  let i = left;
  let j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function swap(items, firstIndex, secondIndex) {
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function quickSort(items, left, right) {
  if (items.length > 1) {
    const index = partition(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }
  // console.log(iterator)
  return items;
}

quickSort(test2Arr, 0, test2Arr.length - 1);
console.log(test2Arr);
