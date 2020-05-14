const bubbleSort = (arr) => {
  let length = arr.length;
  if(length <= 1) {
      return arr;
  }
  for (let i = 0; i < length; i++) {
    let flag = false;
    for (let j = i; j < length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        flag = true; // 表示有数据交换
      }
    }
    if(!flag) break;// 没有数据交换，提前退出
  }
  return arr;
};
//test code
// let a = [2, 0, 4, 1, 3, 5, 8, 12, 6];
// console.log(bubbleSort(a));
