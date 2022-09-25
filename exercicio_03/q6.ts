var exibir = (...rest_parameter: string[]) => {
  for (let item of rest_parameter) {
    console.log(item);
  }
};

exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");
