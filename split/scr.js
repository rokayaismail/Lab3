
document.getElementById("splitButton").addEventListener("click", function () {
    document.getElementById("splitedArea").value="";
    var inputStr = document.getElementById("textAreaStr").value;
    var inputSubStr = document.getElementById("subStr").value;
    if (!(inputStr == "" || inputSubStr == "")) {
        var splitedArr=inputStr.split(inputSubStr);
        for(var i=0;i<splitedArr.length;i++)
            document.getElementById("splitedArea").value +=splitedArr[i]+"\n";
    }
    else {
        alert("you havn't entered apropriate input,PLS try again");
    }
});