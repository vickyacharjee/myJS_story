
       let score=400;
       console.log(score);//400.... bascially here JS automatically detects that the type of score is 400 and thats very ovious 
       console.log(typeof score);// number

       // Another form of number via object
       const num= new Number(1223);
       console.log(num);//400 here the re sults are same but it strictly defines that its a zNumber Full Manual Control
       
       //now lets llok on some of the methods in Number
       
       //toString()
       const n=123;
    //    console.log(n.toString());
       const n1=(n.toString());
       console.log(typeof n1);//results in string

       let b="hi this is vicky";
       b=b.replace("vicky","AKA");
       b=b.replace("this","there");
       console.log(b);
       

    //The below example is Stupid Example

    // const icc=new String("Yo this is vicky acahrjee");
    //  let r=icc.replace('this','This');
    //  console.log(r);
    //  r=icc.replace('vicky','VICKY');
    //  console.log(r);
    //  r=icc.replace('acahrjee','ACHARJEE');

    //  console.log(r);


    //toFixed();   this returns 0 as per the given parameter 
    const a=123;
    console.log(a.toFixed(2));//123.00
    console.log(a.toFixed(1));//123.0
    console.log(a.toFixed(3));//123.000

    //toPecision

    const b1=12.123;
    console.log(b1.toPrecision(2));//12


    //tolocalestring
    const b2=120000;
    console.log(b2.toLocaleString());//tis is for USA standard which returns 120,000

    //now we will se in indian format
    console.log(b2.toLocaleString('en-IN'));//tis is for USA standard which returns 1,20,000
    
    
    
    
    //+++++++++++++++++++++MATH_LIBRARY++++++++++++++++++++++++++

    console.log(Math);
    let m1=123;
    let m2=23.3456; 
    console.log(Math.exp(m1))//exponent
    console.log(Math.abs(m1));
    console.log(Math.round(m2));
    console.log(Math.ceil(m2));//24    
    console.log(Math.floor(m2));//23
    console.log(Math.min(1,2,3,4,5));
    console.log(Math.max(1,2,3,4,5));
    console.log(Math.random());// always remember that Random method always ranges from 0  o 1(in b/w includes Decimal points)
    console.log(Math.random()*10);// once we put on the 10 then it ranges from 1 to 10
    console.log(Math.ceil(Math.random()*10));// once we put on the 10 then it ranges from 1 to 10
    console.log(Math.floor(Math.random()*10));// once we put on the 10 then it ranges from 1 to 10
    
    //Now the issue here is random may results to 0 in any case then it will be a kinda bug so as to rectify this then we need to add additional 0 (Zero) so in any chances it will be atleas or lease to one(1)

    console.log(Math.floor(Math.random()*10+1));// once we put on the 10 then it ranges from 1 to 10
   
    let min=1;
    let max=50;
    console.log(Math.floor(Math.random()*(max -min+1)+min));// this is a technique where we can specify in a set of range






























































































