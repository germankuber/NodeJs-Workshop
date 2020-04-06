fetch("")
  .then((x) => console.log(x))
  .catch((e) => console.error(e));

const fetchFunctionAsync = async () => await fetch("");
