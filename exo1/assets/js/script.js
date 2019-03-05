var c = document.getElementById('moncanvas');
var ctx = c.getContext("2d");
// CORNET
ctx.beginPath();      // Début du chemin
ctx.fillStyle = "#AA6522";
ctx.moveTo(100,100);
ctx.lineTo(200,100);
ctx.lineTo(150,300);
ctx.closePath();      // Fermeture du chemin
ctx.fill();

// //boule
ctx.beginPath();
ctx.fillStyle = "#8A0908";
ctx.moveTo(100,100);
ctx.quadraticCurveTo(150,1,200,100);
//ctx.quadraticCurveTo(200,100,150,50);
ctx.fill();
