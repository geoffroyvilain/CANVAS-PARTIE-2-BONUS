var c = document.getElementById('moncanvas');
var ctx = c.getContext("2d");
// BOITE EXTERIEUR
ctx.beginPath();      // Début du chemin
ctx.fillStyle = "#0000FF";
ctx.rect(0,0,400,400);
ctx.closePath();      // Fermeture du chemin
ctx.fill();

// SOUCOUPE BASSE
ctx.beginPath();      // Début du chemin
ctx.fillStyle = "#E0E1F3";
ctx.moveTo(100,200);
// quadraticCurveTo( cp1x, cp1y, destx, desty )
ctx.quadraticCurveTo(200,120,300,200);
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,280,300,200);
ctx.closePath();      // Fermeture du chemin
ctx.fill();

// SOUCOUPE COCKPIT
ctx.beginPath();      // Début du chemin
ctx.fillStyle = "white";
// quadraticCurveTo( cp1x, cp1y, destx, desty )
ctx.moveTo(150,170);
ctx.quadraticCurveTo(200,70,250,170);
ctx.closePath();      // Fermeture du chemin
ctx.fill();
