function CheckArmstrong(iNo1:number):void
{
    var DigitCount:number=0;
    var iCnt:number=0;
    var iSum:number=0;
    var iTemp:number=iNo1;
    var iDigit:number=0;
    var iPower:number=1;
    while(iTemp!=0)
    {
      
        iTemp=(iTemp /10);
        DigitCount++;
    }
    while(iTemp!=0)
    {
        iDigit=iTemp % 10;
        for(iCnt=1;iCnt<=DigitCount;iCnt++)
        {
            iPower=iPower * iDigit;

        }
        iSum=iSum+iPower;
        iPower=1;
        iTemp=(iTemp / 10);

    }
    if(iSum==iNo1)
    {
        console.log('${iNo1} is an Armstrong number');
    }
    else
    {
        console.log('$ {iNo1} is not Armstrong number ');
    }

}


var iNo:number=153;
CheckArmstrong(iNo);