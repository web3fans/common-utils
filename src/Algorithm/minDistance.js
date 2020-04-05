/*
 * @Author: your name
 * @Date: 2019-12-01 20:23:18
 * @LastEditTime : 2020-04-01 00:34:12
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/distance.js
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  var a = 0,
    b = 0,
    c = 0,
    min = 0;
  var len1 = word1.length;
  var len2 = word2.length;
  if (len1 > 0 && len2 > 0) {
    a =
      word1[len1 - 1] === word2[len2 - 1]
        ? minDistance(
            word1.substring(0, len1 - 1),
            word2.substring(0, len2 - 1)
          )
        : minDistance(
            word1.substring(0, len1 - 1),
            word2.substring(0, len2 - 1)
          ) + 1;
    b = minDistance(word1, word2.substring(0, len2 - 1)) + 1;
    c = minDistance(word1.substring(0, len1 - 1), word2) + 1;
    min = a > b ? b : a;
    return min > c ? c : min;
  } else {
    if (len1 === 1 && len2 === 1) {
      return word1[0] === word2[0] ? 0 : 1;
    } else {
      if (len1 === 0) {
        return len2;
      } else {
        if (len2 === 0) {
          return len1;
        }
      }
    }
  }
};

//dp
export const minDistance = (word1, word2) => {
  //solve using DP
  // think of making a matrix where the value of the element is number of moves needed to efficiently match 1-x characters of word2 with 1-y characters of word1
  // start populating from [0,0] and easier ones like all the [0,x] and [y,0] and build up to [y,x] and return the value
  let table = new Array(word1.length + 1); // +1 to count for case when it's 0 0 empty words
  for (let i = 0; i < table.length; i++) {
    // this table will show index+1th character
    if (i === 0) {
      let topArray = [];
      for (let i = 0; i < word2.length + 1; i++) {
        topArray[i] = i;
      }
      table[i] = topArray;
    } else {
      table[i] = new Array(word2.length + 1);
      table[i][0] = i;
    }
  }
  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[0].length; j++) {
      if (word1[i - 1] != word2[j - 1]) {
        table[i][j] =
          1 + Math.min(table[i - 1][j - 1], table[i - 1][j], table[i][j - 1]); // table[i-1][j-1] is not always the most efficient one to start off of since sometimes making it equal at table[i-1][j-1] might require more steps than table[i-1][j] etc
      } else {
        //table[i][j]= Math.min(table[i-1][j-1] ,1+table[i-1][j],1+table[i][j-1])
        table[i][j] = table[i - 1][j - 1];
      }
    }
  }
  // console.log(table)
  return table[table.length - 1][table[0].length - 1];
};
