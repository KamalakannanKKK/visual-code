
var row=1;
var entry=document.getElementById("lll");
entry.addEventListener("click",display);


function display(){
    var name=document.getElementById("k").value;
    var dis=document.getElementById("dd");
    var ins=dis.insertRow(row);
     var cell1=ins.insertCell(0);
    cell1.innerHTML= name;
    row=row+1;
}
