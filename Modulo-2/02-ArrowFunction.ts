const x = function (a: string) {
  //this: hace referencia a quien llama la función x
};
const y = (a: number) => {
  //this: hace referencia a la función y
};

const testFunctionObj = {
  func1: function () {
    console.log(this);
  },
  func2: () => {
    console.log(this);
  },
};

testFunctionObj.func1();
testFunctionObj.func2();

const simpleFunction = (a) => a * a;
