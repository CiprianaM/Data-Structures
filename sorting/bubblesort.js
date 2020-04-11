//analyse pairs of numbers and if adjacent numbers are in the incorrect order, swap them, until array is sorted
//implementation 1
// O(n^2)=quadratic
function bubbleFor (arr) {
  for (let i=0; i<arr.length-1; i++) {
    for (let j=i; j<arr.length; j++) {
      if(arr[i]>arr[j]) {
        const maxOfTwo = arr[i];
        arr[i]=arr[j];
        arr[j]=maxOfTwo;
      }
    }
  }
  return arr;
}

function bubbleWhile (arr) {
  let index = 0;
  let sorted = true;
  while (index<arr.length-1 || sorted===false) {
    if(arr[index]>arr[index+1]) {
      const maxOfTwo = arr[index];
      arr[index]=arr[index+1];
      arr[index+1]=maxOfTwo;
      sorted=false;
    }
    index++;
    if(index===arr.length-1 && sorted===false) {
      index=0;
      sorted=true;
    }
  }
  return arr;
}

function bubbleRecursion (arr, length) {
  if (length===1) {
    return arr;
  } else {
    for(let i=0; i<length-1; i++) {
      if(arr[i]>arr[i+1]) {
        const maxOfTwo = arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=maxOfTwo;
      }
    }
  }
  bubbleRecursion(arr, length-1)
  return arr;
}


console.log(bubbleRecursion([100,1, 3, 0, 9, 11, 4, 8, 5], 9))

