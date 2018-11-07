// jshint esversion: 6

// Req. 6-D
let arrAvg = (arr) => {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
  	sum += arr[i];
  }
  var avg = sum / arr.length;
  return avg;
};

// Req. 6-E
let arrMax = (arr) => {
  var max = arr[0];
  arr.forEach(function(i){
    if(max < i){
      max = i;
    }
  });
  return max;
};

// Req. 6-F
let allEven = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 != 0){
      return false;
    }
  }
  return true;
};

//EC
let arrMin = (arr) => {
  var min = arr[0];
  for (let i of arr) {
    if(i < min){
      min = i;
    }
  }
  return min;
};
