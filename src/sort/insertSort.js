/*
 * @Author: your name
 * @Date: 2020-05-15 00:14:51
 * @LastEditTime: 2020-05-15 00:27:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/common-utils/src/sort/insertSort.js
 */
const insertSort = (arr) => {
  let length = arr.length;
  if(length <= 1) {
      return arr;
  }
  for(let i = 1; i < length; i++){
      let value = arr[i];
      let j = i-1;
      for(;j >=0;j--){
          if(value < arr[j]){
              arr[j+ 1] = arr[j];
          }else{ 
              break;
          }
      }
      a[j+1] = value; // 插入数据
  }
  return arr;
}

//test code
// let a = [2, 0, 4, 1, 3, 5, 8, 12, 6];
// console.log(insertSort(a));