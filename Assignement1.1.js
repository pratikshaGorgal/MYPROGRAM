function Maximum(iNo1, iNo2, iNo3) {
    if ((iNo1 > iNo2) && (iNo1 > iNo3)) {
        console.log("Lagrgest number are :" + iNo1);
    }
    else if ((iNo2 > iNo1) && (iNo2 > iNo3)) {
        console.log("Lagrgest number are :" + iNo2);
    }
    else {
        console.log("Lagrgest number are :" + iNo3);
    }
}
var iNo11 = 23;
var iNo22 = 89;
var iNo33 = 6;
Maximum(iNo11, iNo22, iNo33);
