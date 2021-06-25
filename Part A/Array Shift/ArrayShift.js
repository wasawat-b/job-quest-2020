var array = [1, 2, 3, 4, 5, 6];
function shifted(array, direction, number) {
    var length = array.length;
    var acc = [];
    if (direction === "left") {
        for (var i = 0; i <= length - 1; i++) {
            if (i < length - number) {
                acc[i] = array[i + number];
            }
            else {
                acc[i] = array[i - (length - number)];
            }
        }
    }
    else if (direction === "right") {
        for (var i = length - 1; i >= 0; i--) {
            if (i > length - 1 - number) {
                acc[length - 1 - i] = array[2 * length - (1 + i + number)];
            }
            else {
                acc[length - 1 - i] = array[length - 1 - (i + number)];
            }
        }
    }
    return acc;
}
;
console.log(shifted(array, "left", 2));
