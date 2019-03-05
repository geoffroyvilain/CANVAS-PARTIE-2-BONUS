var c = document.getElementById('moncanvas');
var ctx = c.getContext("2d");
// Visage
ctx.beginPath();
 // arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )
ctx.arc(210,100,100,0,Math.PI*2,true);
ctx.strokeStyle = "#976F0F";
ctx.stroke();
ctx.fillStyle = "#976F0F";
ctx.fill();

ctx.beginPath();
ctx.moveTo(30,180);//debut du bras gauche
ctx.lineTo(370,180);//fin bras droit
 // quadraticCurveTo( cp1x, cp1y, destx, desty )
ctx.quadraticCurveTo(390,200,370,220);// pour faire la main droite
ctx.lineTo(280,220); // retour bras droit
ctx.lineTo(280,430); // descente corps droite
ctx.quadraticCurveTo(260,445,240,430);// pour faire la pied droit
ctx.lineTo(240,370); // retour jambe droite intérieur
// quadraticCurveTo( cp1x, cp1y, destx, desty )
ctx.quadraticCurveTo(210,330,180,370);// pour faire l'entre-jambe
ctx.lineTo(180,430); // descente jambe gauche interieur
ctx.quadraticCurveTo(160,445,140,430);// pour faire la pied gauche
ctx.lineTo(140,220); // remontee jambe gauche exterieur
ctx.lineTo(30,220); // bas bras GAUCHE
ctx.quadraticCurveTo(10,200,30,180);// main gauche
ctx.stroke();
ctx.fill();
ctx.closePath();

//oeil gauche
ctx.beginPath();
 // arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )
ctx.arc(170,75,15,0,Math.PI*2,true);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

//oeil droit
ctx.beginPath();
 // arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )
ctx.arc(240,75,15,0,Math.PI*2,true);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

//boutons haut
ctx.beginPath();
ctx.moveTo(210,220);
// arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )
ctx.arc(210,240,10,0,Math.PI*2,true);
ctx.fillStyle = "#7A2974";
ctx.fill();
ctx.closePath();
//boutons bas
ctx.beginPath();
ctx.arc(210,280,10,0,Math.PI*2,true);
ctx.fillStyle = "#7A2974";
ctx.fill();
ctx.closePath();

//sourire
ctx.beginPath();
ctx.moveTo(170,115);
// quadraticCurveTo( cp1x, cp1y, destx, desty )
ctx.quadraticCurveTo(205,130,240,115);// levre haute
ctx.moveTo(170,115);
ctx.quadraticCurveTo(205,155,240,115);// levre haute
ctx.lineWidth = 2;         // Définition de la largeur de ligne
ctx.fillStyle = "#976F0F";
ctx.fill();
ctx.strokeStyle = "red";
ctx.stroke();
ctx.closePath();

//sourcil
ctx.beginPath();
ctx.moveTo(150,55);
// quadraticCurveTo( cp1x, cp1y, destx, desty )
ctx.quadraticCurveTo(170,40,190,55);// sourcil gauche
ctx.moveTo(220,55);
// quadraticCurveTo( cp1x, cp1y, destx, desty )
ctx.quadraticCurveTo(240,40,260,55);// sourcil droit
ctx.lineWidth = 2;         // Définition de la largeur de ligne
ctx.strokeStyle = "white";
ctx.stroke();
ctx.closePath();

// //biroute
// ctx.beginPath();
// ctx.moveTo(210,330);
// ctx.lineTo(210,400);
// ctx.lineWidth = 20;         // Définition de la largeur de ligne
// ctx.strokeStyle = "black";
// ctx.stroke();
// ctx.closePath();
