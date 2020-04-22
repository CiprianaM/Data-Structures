function insertionSort(arr) {
  let currentIndex =1;
  while (currentIndex < arr.length) {
    let tempIndex = currentIndex;
    while (tempIndex) {
      if (arr[tempIndex-1]>arr[tempIndex]) {
        [arr[tempIndex-1], arr[tempIndex]] = [arr[tempIndex], arr[tempIndex-1]];
      }
      tempIndex--;
    }
    currentIndex++;
  }
  return arr;
}

// 1, 1, //3,4,2,10,12,1,5,6// temp=0;curr=2
//2, 2 //3,2,4,10,12,1,5,6//temp=1,curr=2
//2, 1, //2,3,4,10,12,1,5,6//temp=0,curr=3 etc
