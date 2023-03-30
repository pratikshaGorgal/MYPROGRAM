class Arithematic
{
    public Number1:number;
    public Number2:number;
   
    public constructor(Data1:number,Data2:number)
    {
        this.Number1=Data1;
        this.Number2=Data2;
        

    }
}
class ArithematicOperations extends Arithematic
{

  public constructor(Data1:number,Data2:number)
    {
        super(Data1,Data2,);
    }

    public Addition():number
    {
        let Result:number=0;
        Result=this.Number1+this.Number2;
        return Result;
    }
    public Substraction():number
    {
        let Result:number=0;
        Result=this.Number1-this.Number2;
        return Result;
        
    }
    public Multiplication():number
    {
        let Result:number=0;
        Result=this.Number1*this.Number2;
        return Result;
        
    }
    public Division():number
    {
        let Result:number=0;
        Result=this.Number1/this.Number2;
        return Result;
        
    }
}

var object1=new ArithematicOperations(51,21);
var object2=new ArithematicOperations(20,12);

var Return:number=0;
Return=object1.Addition(); //72
console.log("Addition of object1 are:"+Return);

Return=object1.Substraction();//30
console.log("Substraction of object1 are:"+Return);

Return=object1.Multiplication();//1071
console.log("Multiplication of object1 are:"+Return);

Return=object1.Division();//2.42
console.log("Division of object1 are:"+Return.toFixed(2));

console.log("--------------Values of Object 2 are:----------------");

Return=object2.Addition();//32
console.log("Addition of object1 are:"+Return);

Return=object2.Substraction();//8
console.log("Substraction of object1 are:"+Return);

Return=object2.Multiplication();//240
console.log("Multiplication of object1 are:"+Return);

Return=object2.Division();//1.67
console.log("Division of object1 are:"+Return.toFixed(2));





