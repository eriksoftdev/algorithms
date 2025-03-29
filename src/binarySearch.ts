function binarySearch(array: number[], value: number): number | null {
  let start = 0;
  let mid = Math.floor(array.length / 2);
  let end = array.length - 1;

  while (start < end) {
    if (array[mid] === value) {
      return mid;
    } else if (array[mid] < value) {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    } else {
      end = mid;
      mid = Math.floor((start + end) / 2);
    }
  }
  return null;
}

export default binarySearch;
