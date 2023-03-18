function Fabonnic(iNo:number):void
{

    var iNo2:number=0;
    var iNo3:number=1;
    var Sum:number=0;
    var Counter:number=0;
    for(Counter=1;Counter<=iNo/3;Counter++)
    {
        Sum=iNo2+iNo3;
        console.log("Fabonnic series are:"+Sum);
        iNo2=iNo3;
        iNo3=Sum;
    }
}

var iNo1:number=21;
Fabonnic(iNo1);
