const receivedData1 = [-8, 0, 321, 5854, 76];
const receivedData2 = [4123];
const receivedData3 = [];
const secondMax = (array) => {
  if (array.length > 1) {
    const max = Math.max(...array);
    array.splice(array.indexOf(max), 1);
    const foundSecondMax = Math.max(...array);
    console.log(foundSecondMax);
  } else if (array.length === 1) {
    const foundSecondMax = Math.max(...array);
    console.log(foundSecondMax);
  } else if (array.length === 0) {
    console.log("Error!");
  }
};

secondMax(receivedData1);
secondMax(receivedData2);
secondMax(receivedData3);