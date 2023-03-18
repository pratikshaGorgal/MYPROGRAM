function Summation(Arr:number[]):number
{
    var Counter:number=0;
    var Sum:number=0;
    for(Counter=0;Counter<Arr.length;Counter++)
    {
      Sum=Sum+Arr[Counter];
    }
    return Sum;

}
var Arr1=[23,6,7,4,5,7];
var Ret:number=0;
Ret=Summation(Arr1);
console.log("Summation are:"+Ret);