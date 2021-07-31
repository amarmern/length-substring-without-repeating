var lengthOfLongestSubstring = function (s) {
  let str = "";
  let ary = [];
  let len = 0;
  for (var i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    let index = str.indexOf(char);
    if (index === -1) {
      str += char;
      len = len > str.length ? len : str.length;
    } else {
      ary.push(str);
      str = str.slice(index + 1) + char;
    }
  }
  return len;
};

// // // var lengthOfLongestSubstring = function (s) {
// // //   let map = {};
// // //   let start = 0;
// // //   let maxLen = 0;
// // //   let arr = s.split("");

// // //   for (let i = 0; i < s.length; i++) {
// // //     let current = map[arr[i]];
// // //     if (current != null) {
// // //       start = current + 1;
// // //     } else {
// // //       maxLen = Math.max(maxLen, i - start + 1);
// // //     }
// // //     map[arr[i]] = i;
// // //   }
// // //   return maxLen;
// // // };

console.log(lengthOfLongestSubstring("abcabcbb"));
