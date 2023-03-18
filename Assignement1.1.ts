function Maximum(iNo1:number,iNo2:number,iNo3:number):void
{
    if((iNo1>iNo2)&&(iNo1>iNo3))
    {
        console.log("Largest number are :"+iNo1)
    }
    else if((iNo2>iNo1)&&(iNo2>iNo3))
    {
         console.log("Largest number are :"+iNo2)
    }
    else
    {
         console.log("Largest number are :"+iNo3)
    }
}

var iNo11:number=23
var iNo22:number=89
var iNo33:number=6
Maximum(iNo11,iNo22,iNo33)