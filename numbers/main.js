var prompetedVal = null;
do {
    if (prompetedVal != null)
        alert("You have not entered apropriate value ,PLS try again :)");
    prompetedVal = prompt("Select a list style:\n1(bullet),2(numbered),3(lettered)", "1");
} while (!(prompetedVal != null && ((prompetedVal === "1") || (prompetedVal === "2") || (prompetedVal === "3"))));

switch (prompetedVal) {
    case "1":
        prompetedVal = "<h3>Bullet List</h3><br>" +
            "<ul style=\"list-style-type:disc;\">" +
            "<li>Coffee</li>" +
            "<li>Tea</li>" +
            "<li>Milk</li>" +
            "</ul>";
        break;
    case "2":
    prompetedVal = "<h3>Ordered List: Number</h3><br>" +
    "<ol type=\"1\">" +
    "<li>Coffee</li>" +
    "<li>Tea</li>" +
    "<li>Milk</li>" +
    "</ol>";
        break;
    case "3":
    prompetedVal = "<h3>Ordered List: Lettered</h3><br>" +
    "<ol type=\"A\">" +
    "<li>Coffee</li>" +
    "<li>Tea</li>" +
    "<li>Milk</li>" +
    "</ol>";
        break;
}
document.write(prompetedVal);
document.write("<br><p>click refresh or(reload) to run the script again</p>");