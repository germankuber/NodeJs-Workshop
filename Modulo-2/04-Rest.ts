const [firstValue, ...restOfItems] = [1, 2, 3, 4, 5];

const data = {
  firtName: "Juan",
  lastName: "Animo",
  age: 32,
  startDate: new Date(),
};

const { firtName, lastName, ...person } = data;

const data2 = {
  firstName: "Juan 2",
  ...data,
};
