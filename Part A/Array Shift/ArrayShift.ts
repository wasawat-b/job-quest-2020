let array: number[] = [1, 2, 3, 4, 5, 6];

function shifted (array: number[], direction: string, number: number) {
  const length = array.length;
  let acc = [];
  if (direction === "left") {
    for (let i = 0; i <= length - 1; i++) {
      if (i < length - number) {
        acc[i] = array[i + number];
      } else {
        acc[i] = array[i - (length - number)];
      }
    }
  } else if (direction === "right") {
    for (let i = length - 1; i >= 0; i--) {
      if (i > length - 1 - number) {
        acc[length - 1 - i] = array[2 * length - (1 + i + number)];
      } else {
        acc[length - 1 - i] = array[length - 1 - (i + number)];
      }
    }
  }

  return acc;
};

console.log(shifted(array, "left", 2));