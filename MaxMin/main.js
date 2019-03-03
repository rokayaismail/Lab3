var num1 = null;
do {
    if (num1 != null)
        alert("You have not entered apropriate value ,PLS try again :)");
    num1 = prompt("Enter the first number", "1");
} while (isNaN(num1) || num1==null);

var num2 = null;
do {
    if (num2 != null)
        alert("You have not entered apropriate value ,PLS try again :)");
    num2 = prompt("Enter the second number", "1");
} while (isNaN(num2) || num2==null);
var num3 = null;
do {
    if (num3 != null)
        alert("You have not entered apropriate value ,PLS try again :)");
    num3 = prompt("Enter the third number", "1");
} while (isNaN(num3) || num3==null);

var str="<p>First Number:"+num1+"</p>"+
"<p>Second Number:"+num2+"</p>"+
"<p>Third Number:"+num3+"</p>"+
"<p>Maximum is:"+Math.max(Number(num1),Math.max(Number(num2),Number(num3)))+"</p>"+
"<p>Minimum is:"+Math.min(Number(num1),Math.min(Number(num2),Number(num3)))+"</p>";

document.write(str);
document.write("<br><p>click refresh or(reload) to run the script again</p>");