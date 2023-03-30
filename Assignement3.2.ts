class Circle
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
class AreaOfCircle extends Circle
{
    constructor(R:number)
    {
        super(R);
    }
    public Area():number
    {
        let Ret:number=0;
        Ret=this.PI*this.Radius*this.Radius;
        return Ret;
    }
}

var Object1=new AreaOfCircle(5);
var Ans:number=0;
Ans=Object1.Area()
console.log("Area of Circle is:"+Ans);

var Object2=new AreaOfCircle(10);
var Ans:number=0;
Ans=Object2.Area()
console.log("Area of Circle is:"+Ans);
