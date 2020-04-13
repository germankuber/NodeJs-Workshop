const add = (a, b) => a + b;

const double = (a) => add(a, b);

const printDouble = (a) => {
  const output = double(a);
  console.log(output);
};

printDouble(9);
