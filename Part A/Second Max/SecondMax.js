var receivedData1 = [-8, 0, 321, 5854, 76];
var receivedData2 = [4123];
var receivedData3 = [];
var secondMax = function (array) {
    if (array.length > 1) {
        var max = Math.max.apply(Math, array);
        array.splice(array.indexOf(max), 1);
        var foundSecondMax = Math.max.apply(Math, array);
        console.log(foundSecondMax);
    }
    else if (array.length === 1) {
        var foundSecondMax = Math.max.apply(Math, array);
        console.log(foundSecondMax);
    }
    else if (array.length === 0) {
        console.log("Error!");
    }
};
secondMax(receivedData1);
secondMax(receivedData2);
secondMax(receivedData3);
