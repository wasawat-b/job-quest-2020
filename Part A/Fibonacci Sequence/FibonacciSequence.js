function fib(number) {
    var value = 1;
    var acc = 0;
    for (var i = 1; i < number; i++) {
        value += acc;
        acc = value - acc;
    }
    return value;
}
;
console.log(fib(7));
