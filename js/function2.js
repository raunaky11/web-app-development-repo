var x = 10;
function multipleNumbe(num1)
{
    firstName = "bob";
    var multiple = 5;
    {
        var z = 100;
    }
    for (i = 1; i <= num1 ; i++)
    {
        //var res = i*multiple; // local to multipleNumber() function
        let res = i 
        console.log("res" , res);
    }

    console.log("name" , firstName);
    console.log("x = " , x)
    console.log("value of multiple" , multiple);
    console.log("z = " , z)
    // console.log ("res =" , res);
    return multiple * num1 ; // compute statement 
}

var result = multipleNumbe(10);