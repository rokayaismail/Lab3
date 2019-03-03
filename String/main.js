
document.getElementById("searchButton").addEventListener("click", function () {

    var inputStr = document.getElementById("textAreaStr").value;
    var inputSubStr = document.getElementById("subStr").value;
    var inputNum = document.getElementById("index").value;
    if (!(inputStr == "" || inputSubStr == "" || inputNum == "" || isNaN(inputNum))) {
        document.getElementById("fIndex").value = (inputStr.indexOf(inputSubStr)=="-1")?"does not occure":inputStr.indexOf(inputSubStr);
        document.getElementById("lIndex").value = (inputStr.lastIndexOf(inputSubStr)=="-1")?"does not occure":inputStr.lastIndexOf(inputSubStr);
        document.getElementById("fIndex2").value = (inputStr.indexOf(inputSubStr, inputNum)=="-1")?"does not occure":inputStr.indexOf(inputSubStr, inputNum);
        document.getElementById("lIndex2").value = (inputStr.lastIndexOf(inputSubStr, inputNum)=="-1")?"does not occure":inputStr.lastIndexOf(inputSubStr, inputNum);
        // document.write(inputStr + "  " + inputSubStr + " " + inputNum);
    }
    else {
        alert("you havn't entered apropriate input,PLS try again");
    }
});