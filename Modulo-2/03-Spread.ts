const { PI, E, SQRT2 } = Math;

const objectTest = {
  propertyA: "value 1",
  propertyB: 1,
};

const checkObject = (
  { propertyA }: IObjectTect,
  { secondPropertyTest: number = 2 } = {}
) => {
  console.log(propertyA);
};

checkObject(objectTest);

interface IObjectTect {
  propertyA: string;
  propertyB: number;
}

const [first, second, , forth] = [1, 2, 3, 4];
