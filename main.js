var StudentName= [];
function Submit(){
    var Name1= document.getElementById("Student1").value;
    var Name2= document.getElementById("Name2").value;
    var Name3= document.getElementById("Name3").value;
    var Name4= document.getElementById("Name4").value;
    var Name5= document.getElementById("Name5").value;
    StudentName.push(Name1);
    StudentName.push(Name2);
    StudentName.push(Name3);
    StudentName.push(Name4);
    StudentName.push(Name5);
    document.getElementById("output").innerHTML=StudentName;
    document.getElementById("SubmitButton").style.display="none";
    document.getElementById("SortButton").style.display="inline-block";
}
function SortData(){
    StudentName.sort();
    document.getElementById("output").innerHTML=StudentName;
}

