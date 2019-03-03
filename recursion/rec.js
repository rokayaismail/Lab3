var factorial = function (a) {
    if (a == 1 || a == 0)
        return 1;
    else
        return a * factorial(a - 1);
}

for (var i = 1; i <= 10; i++) {
    var row = document.getElementById("myTable").insertRow(i - 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = i;
    cell2.innerHTML = factorial(i);

}

var num1 = null;
do {
    if (num1 != null)
        alert("You have not entered apropriate value ,PLS try again :)");
    num1 = prompt("Enter number", "1");
} while (isNaN(num1) || num1 == null);

alert("the factorial of " + num1 + " is " + factorial(parseInt(num1)));