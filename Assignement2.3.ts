function SecondMaximum(Arr:number[]):void
{
    var Counter:number=0;
    var First:number=0;
    var Second:number=0;

    for(Counter=0;Counter<=Arr.length-1;Counter++)
    {
        if(Arr[Counter]>First)
        {
            Second=First;
            First=Arr[Counter]
           
            
        
        }
        else if((Arr[Counter]>Second)&&(Arr[Counter]!=First))
        {
            Second=Arr[Counter]
        }
    }
    console.log("Second Maximum number are:"+Second);

}
var Arr1=[23,89,6,29,56,45,77,22];
var Ret:number=0;
SecondMaximum(Arr1)
