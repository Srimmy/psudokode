canvasEl = document.getElementById("canvas");
ctx = canvasEl.getContext("2d");

//start posisjon
let posX = 0;
let posY = 0;
let size = 50;

//tegner banen og spilleren
drawPlayer(0, 0);


document.addEventListener("keydown", sjekkKnapp); //sjekk knapp funksjonen er hentet rett fra boka
function drawPlayer(x, y) {

    ctx.clearRect(posX, posY, size, size);
    posX += x;
    posY += y;


    //tegner spilleren
    ctx.fillRect(posX, posY, size, size);     //glemte fill foran Rect

    //sjekker om du er innenfor noen kordinater.
    if (posX > 400 && posY > 400) {
        duVant();
    }



    //streker for å markere hvor målet er 
    ctx.beginPath();     //visste ikke hvordan dette ble koda, er i boka og fikk hjelp
    ctx.moveTo(400, 0);
    ctx.lineTo(400, 500);
    ctx.moveTo(0, 400)
    ctx.lineTo(500, 400)
    ctx.stroke();
}

// tatt rett fra boka, fant ut at man kan bytte ut e.keyCode = kodetall med e.key = "ArrowLeft"
function sjekkKnapp(e) {
    switch (e.key) {
        case "ArrowLeft":
            if (!(posX - 10 < 0)) {
                drawPlayer(-10, 0);

            }
            break;
        case "ArrowRight":
            if (!(posX + 10 > 450)) {
                drawPlayer(10, 0);
            }
            break;
        case "ArrowUp":
            if (!(posY - 10 < 0)) {
                drawPlayer(0, -10);
            }
            break;
        case "ArrowDown":
            if (!(posY + 10 > 450)) {
                drawPlayer(0, 10);
            }
            break;
    }
    //tidligere kode før jeg fant ut om switch
    // if (e.key == 'ArrowLeft') { //venstre
    //     drawPlayer(-10, 0);
    // } else if (e.key == 'ArrowRight') {//høyre
    //     drawPlayer(10, 0);
    // } else if (e.key == 'ArrowDown') {//ned
    //     drawPlayer(0, 10);
    // } else if (e.key == 'ArrowUp') {//opp
    //     drawPlayer(0, -10);
    // }
}

//du vant melding
function duVant() {
    console.log("du vant!")
    ctx.clearRect(posX, posY, size, size);
    posX = 0;
    posY = 0;
    drawPlayer(0, 0);
}
