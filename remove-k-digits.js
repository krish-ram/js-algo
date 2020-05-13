var removeKdigits = function (num, k) {
  if (num.length === k) return "0";
  // save maximum
  let result = [num[0]];
  let i = 1;

  while (i < num.length && k > 0) {
    const str = num[i];
    if (str >= result[result.length - 1]) {
      result.push(str);
    } else {
      while (result.length > 0 && str < result[result.length - 1] && k > 0) {
        result.pop();
        k -= 1;
      }
      result.push(str);
    }
    i += 1;
  }

  const strs = result.slice(0, result.length - k).join("") + num.slice(i);
  let start = 0;
  while (strs[start] === "0") start += 1;
  const final = strs.slice(start);
  return final || "0";
};
