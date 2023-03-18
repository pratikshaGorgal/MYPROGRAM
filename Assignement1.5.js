function Fabonnic(iNo) {
    var iNo2 = 0;
    var iNo3 = 1;
    var Sum = 0;
    var Counter = 0;
    for (Counter = 1; Counter <= iNo / 3; Counter++) {
        Sum = iNo2 + iNo3;
        console.log("Fabonnic series are:" + Sum);
        iNo2 = iNo3;
        iNo3 = Sum;
    }
}
var iNo1 = 21;
Fabonnic(iNo1);
