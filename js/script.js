var t1,t2,p1,p2,eP,eF,aveGrade;

if ( promedioNotas >= 13 ) {
    document.write("<h1>Aprobado</h1>"+"<br>");
} else {
    document.write("<h1>ESTA DESAPROBADO</h1>"+"<br>");
}
if ( promedioNotas >= 18 )
{
    document.write("<h1>Usted ha obtenido media Beca!</h1>"+"<br>");
    document.write("<img src='isil.jpg'>");
}

function GetGrades() {
    t1 = parseInt(document.getElementById("grade1").value);
    t2 = parseInt(document.getElementById("grade2").value);
    p1 = parseInt(document.getElementById("grade3").value);
    p2 = parseInt(document.getElementById("grade4").value);
    eP = parseInt(document.getElementById("grade5").value);
    eF = parseInt(document.getElementById("grade6").value);
}

function GetAverageGrades() {
    aveGrade = (t1+t2+p1+p2+eP+eF)/6;
    aveGrade = Math.round(aveGrade * 10) / 10;
}

function ShowAverageGrades() {
    GetGrades();
    GetAverageGrades();
    var message = "";
    if ( aveGrade >= 13 ) {
        message = "Usted ha Aprobado\n";
        if ( aveGrade >= 18 ) {
            message = message + "Y 🎈✨✨¡Ha obtenido una media Beca!✨✨🎈\n";
        }
    } else {
        message = "Usted ha Desaprobado\n";
    }
    alert(message + "Su Nota promedio ha sido de: " + aveGrade);
}