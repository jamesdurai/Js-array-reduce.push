let num = [29.76, 41.85, 46.5];

let result = num.reduce((acc, curr) => {
  if (curr > 30) {
    acc.push(curr);
  }
  return acc;
}, []);

document.write(result);
