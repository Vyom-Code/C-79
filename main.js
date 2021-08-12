student_arry=[];
function Submit() {
var name_1= document.getElementById("Student_1").value;
var name_2= document.getElementById("Student_2").value;
var name_3= document.getElementById("Student_3").value;
var name_4= document.getElementById("Student_4").value;
var name_5= document.getElementById("Student_5").value;

student_arry.push(name_1);
student_arry.push(name_2);
student_arry.push(name_3);
student_arry.push(name_4);
student_arry.push(name_5);

console.log(student_arry);
document.getElementById("1").innerHTML= student_arry;
document.getElementById("Button_SB").style.display= "none";
document.getElementById("Button_S").style.display= "inline-block";
}

function Sort() {
student_arry.sort();
console.log(student_arry);
document.getElementById("1").innerHTML=student_arry;

}