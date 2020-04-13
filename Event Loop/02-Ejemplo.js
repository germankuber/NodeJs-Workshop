const slowOperation = (a, b) => {
  for (let i = 0; i < 99999999; i++) {}
  return a + b;
};

const a = slowOperation(1, 2);

const b = slowOperation(3, 4);

console.log(a);

console.log(b);
