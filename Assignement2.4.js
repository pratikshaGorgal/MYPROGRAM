function CheckArmstrong(iNo1) {
    var iTemp = iNo1;
    var iCount = 0;
    var iSum = 0;
    while (iTemp != 0) {
        iSum = iTemp % 10;
        iCount++;
        iTemp = iTemp / 10;
    }
    return iCount;
}
/*if(iSum==iNo1)
{
    console.log(iNo1,"Armstrong number")
}
else
{
    console.log(iNo1,"Not Armstrong number");
}*/
var iNo = 153;
var iRet = 0;
iRet = CheckArmstrong(iNo);
console.log("Number of digits are:" + iRet);
