const slowOperation = (a, b) => {
  setTimeout(() => {
    console.log(a + b);
  }, 5000);
};

slowOperation(1, 2);
slowOperation(3, 4);
