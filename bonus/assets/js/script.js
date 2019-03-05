var c = document.getElementById('moncanvas');
var ctx = c.getContext("2d");
// LETTRE E
ctx.beginPath();
ctx.moveTo(200,150);
ctx.lineTo(50,150);  // barre du haut
ctx.lineTo(50,500); // barre verticale vers le bas
ctx.lineTo(200,500);  // barre  horizontale vers la droite
ctx.moveTo(50,325);
ctx.lineTo(120,325); // barre du milieu
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();

// CHIFFRE 2
ctx.beginPath();
ctx.moveTo(200,150);
ctx.quadraticCurveTo(600,0,170,550);
ctx.lineTo(350,500);
ctx.lineWidth = 12;
ctx.strokeStyle = "#EA4E1D";
ctx.stroke();
ctx.closePath();

// LETTRE N
ctx.beginPath();
ctx.moveTo(400,500); // POINT DE DEPART
ctx.lineTo(400,150); // barre verticale vers le HAUT
ctx.lineTo(700,500); // BARRE VERS LE BAS DROIT
ctx.lineTo(700,150);
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();

//LOSANGE 1
ctx.beginPath();
ctx.moveTo(760,150); // POINT DE DEPART
ctx.lineTo(780,170); //haut droite
ctx.lineTo(780,190); // droit
ctx.lineTo(760,210);  // bas droit
ctx.lineTo(740,190);  //bas gauche
ctx.lineTo(740,170);  //gauche
ctx.lineTo(760,150);  //haut gauche
ctx.fillStyle = "#EBEBEB";
ctx.fill();
ctx.closePath();

//LOSANGE 2
ctx.beginPath();
ctx.moveTo(735,195); // POINT DE DEPART
ctx.lineTo(755,215); //haut droite
ctx.lineTo(755,235); // droit
ctx.lineTo(735,255);  // bas droit
ctx.lineTo(715,235);  //bas gauche
ctx.lineTo(715,215);  //gauche
ctx.lineTo(735,195);  //haut gauche
ctx.fillStyle = "#DBDADB";
ctx.fill();
ctx.closePath();

//LOSANGE 3
ctx.beginPath();
ctx.moveTo(785,195); // POINT DE DEPART
ctx.lineTo(805,215); //haut droite
ctx.lineTo(805,235); // droit
ctx.lineTo(785,255);  // bas droit
ctx.lineTo(765,235);  //bas gauche
ctx.lineTo(765,215);  //gauche
ctx.lineTo(785,195);  //haut gauche
ctx.fillStyle = "#595656";
ctx.fill();
ctx.closePath();

//LOSANGE 4
ctx.beginPath();
ctx.moveTo(760,245); // POINT DE DEPART
ctx.lineTo(780,265); //haut droite
ctx.lineTo(780,285); // droit
ctx.lineTo(760,305);  // bas droit
ctx.lineTo(740,285);  //bas gauche
ctx.lineTo(740,265);  //gauche
ctx.lineTo(760,245);  //haut gauche
ctx.fillStyle = "#EA4E1A";
ctx.fill();
ctx.closePath();

//LOSANGE 5
ctx.beginPath();
ctx.moveTo(735,290); // POINT DE DEPART
ctx.lineTo(755,310); //haut droite
ctx.lineTo(755,330); // droit
ctx.lineTo(735,350);  // bas droit
ctx.lineTo(715,330);  //bas gauche
ctx.lineTo(715,310);  //gauche
ctx.lineTo(735,290);  //haut gauche
ctx.fillStyle = "#878787";
ctx.fill();
ctx.closePath();

//LOSANGE 6
ctx.beginPath();
ctx.moveTo(785,290); // POINT DE DEPART
ctx.lineTo(805,310); //haut droite
ctx.lineTo(805,330); // droit
ctx.lineTo(785,350);  // bas droit
ctx.lineTo(765,330);  //bas gauche
ctx.lineTo(765,310);  //gauche
ctx.lineTo(785,290);  //haut gauche
ctx.fillStyle = "#ECECEC";
ctx.fill();
ctx.closePath();

//MINI LOSANGE 1
ctx.beginPath();
ctx.moveTo(820,210); // POINT DE DEPART
ctx.lineTo(825,215); //haut droite
ctx.lineTo(825,220); // droit
ctx.lineTo(820,225);  // bas droit
ctx.lineTo(815,220);  //bas gauche
ctx.lineTo(815,215);  //gauche
ctx.lineTo(820,210);  //haut gauche
ctx.fillStyle = "#A4A4A4";
ctx.fill();
ctx.closePath();

//MINI LOSANGE 2
ctx.beginPath();
ctx.moveTo(830,220); // POINT DE DEPART
ctx.lineTo(835,225); //haut droite
ctx.lineTo(835,230); // droit
ctx.lineTo(830,235);  // bas droit
ctx.lineTo(825,230);  //bas gauche
ctx.lineTo(825,225);  //gauche
ctx.lineTo(830,220);  //haut gauche
ctx.fillStyle = "#F3F3F3";
ctx.fill();
// ctx.strokeStyle = "black";
// ctx.stroke();
ctx.closePath();

//MINI forme 1
ctx.beginPath();
ctx.moveTo(845,215); // POINT DE DEPART
ctx.lineTo(848,218); //haut droite
ctx.lineTo(845,221); //haut droite
ctx.lineTo(842,218); //haut droite
ctx.fillStyle = "red";
ctx.fill();
// ctx.strokeStyle = "black";
// ctx.stroke();
ctx.closePath();

//texte
var text = 'École du Numérique';
ctx.font = "30pt Verdana";
ctx.textAlign = "left";
ctx.textBaseline = "bottom";
var textPxLength = ctx.measureText(text);
ctx.fillStyle = "#E8E8E8";
ctx.fillText(text,380,570);

//texte2
var textBis = 'du Noyonnais';
ctx.font = "30pt Verdana";
ctx.textAlign = "left";
ctx.textBaseline = "bottom";
var textPxLength = ctx.measureText(text);
ctx.fillStyle = "#E8E8E8";
ctx.fillText(textBis,380,610);
