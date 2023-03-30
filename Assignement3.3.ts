class Circlex
{
    public Radius:number;
    public PI:number;
    public constructor(R:number,PI?:number)
    {
        this.Radius=R;
        if(PI==undefined)
        {
            this.PI=3.14;
        }
    }
}
class circle extends Circlex
{
    constructor(R:number)
    {
        super(R);
    }
    public AreaOfCircumference():number
    {
        let Ret:number=0;
        Ret=2*this.PI*this.Radius;
        return Ret;
    }
    
}

var Object1=new circle(5);
var Ans:number=0;
Ans=Object1.AreaOfCircumference()
console.log("Area of Circumference is:"+Ans.toFixed(2));//31.4

var Object2=new circle(10);
var Ans:number=0;
Ans=Object2.AreaOfCircumference()
console.log("Area of Circumfernec is:"+Ans.toFixed(2));//62.8
