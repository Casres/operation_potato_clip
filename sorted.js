const bubbleSort = (arr) => {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temporary = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temporary;

        sorted = false;
      }
    }
  }
  return arr;
};

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotPoint = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivotPoint) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivotPoint, quickSort(right))
};

module.exports = { bubbleSort, quickSort };
