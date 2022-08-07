Data = [1, 2, "Aman", 3, 4, 975];
SortedData = [10, 23, 34, 56, 78, 89, 90];


//Linear Search
const LinearSearch = (value) => {
  let found = false;
  for (let i = 0; i < Data.length; i++) {
    if (Data[i] === value) {
      found = true;
    }
  }
  if (found) {
    console.log("Yeah It's Present");
  } else {
    console.log("Naah It's Not Present");
  }
};
LinearSearch("Aman");


//Binary Search
const Search = (data, value) => {
  let start = 0;
  let end = data.length - 1;

  console.log(BinarySearch(data, value, start, end));
};

const BinarySearch = function (data, value, start, end) {

  if (start > end) {
    return false;
  }
  let middle = Math.floor((start + end) / 2);

  if (data[middle] === value) {
    return true;
  }

  if (data[middle] > value) {
    return BinarySearch(data, value, start, middle - 1);
  } else {
    return BinarySearch(data, value, middle + 1, end);
  }
};

Search(23, SortedData);
