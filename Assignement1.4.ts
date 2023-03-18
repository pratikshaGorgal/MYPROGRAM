function CheckPrime(Data:number)
{
    let flag=0
    var Counter:number=0;
    for(Counter=1;Counter<=Data;Counter++)
    {
        if(Data % Counter==0)
        {
            flag=1
            break;
        }
    }
}


var iNo1:number=11;
var Display:number=CheckPrime(iNo1);

