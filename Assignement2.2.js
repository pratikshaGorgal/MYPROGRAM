function Summation(Arr) {
    var Counter = 0;
    var Sum = 0;
    for (Counter = 0; Counter < Arr.length; Counter++) {
        Sum = Sum + Arr[Counter];
    }
    return Sum;
}
var Arr1 = [23, 6, 7, 4, 5, 7];
var Ret = 0;
Ret = Summation(Arr1);
console.log("Summation are:" + Ret);
