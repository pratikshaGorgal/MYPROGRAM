
function Maximum(Arr:number[]):number
{
    var Counter:number=0;
    var iMax:number=0;
    for(Counter=0;Counter<=Arr.length;Counter++)
    {
        if(Arr[Counter]>iMax)
        {
            iMax=Arr[Counter]
        }
    }
    return iMax;
}
var Arr1=[23,89,6,29,56,45,77,22];
var Ret:number=0;
Ret=Maximum(Arr1)
console.log("Largest number are:"+Ret);
