const fib = (number) => {
    let value = 1;
    let acc = 0;
    for (let i = 1; i < number; i++) {
      value += acc;
      acc = value - acc;
    }
    console.log(value);
  };

fib(7);