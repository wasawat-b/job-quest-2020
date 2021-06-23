const fizzBuzz = (number) => {
    let both;
    switch (number % 3 === 0 && number % 5 === 0) {
      case true:
        both = true;
        console.log("FizzBuzz");
        break;
      default:
        both = false;
        break;
    }
    switch (both) {
      case true:
        break;
      case false:
        switch (number % 3 === 0) {
          case true:
            console.log("Fizz");
            break;
        }
        switch (number % 5 === 0) {
          case true:
            console.log("Buzz");
            break;
        }
    }
  };
  
  fizzBuzz(3);
  fizzBuzz(5);
  fizzBuzz(45);