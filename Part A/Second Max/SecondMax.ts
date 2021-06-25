const receivedData1: number[] = [-8, 0, 321, 5854, 76];
const receivedData2: number[] = [4123];
const receivedData3: number[] = [];
const secondMax = (array: number[]) => {
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