setTimeout(() => process.exit(), 3000);

process.on("exit", () => {
  console.info("Proceso terminado");
});

console.log("Ejecución 1");
