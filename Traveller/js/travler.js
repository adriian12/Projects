var ran
ran = Math.round(Math.random() * 50000)
document.write("Usted es el visitante " + ran + " de esta página.")


/*------------------------------------------------------------*/

var ie4, nn4;
if (document.all) ie4 = true;
if (document.layers) nn4 = true;

function terremoto(cuenta) {
    if (nn4 || ie4) {
        for (i = 13; i > 0; i--) {
            for (j = cuenta; j > 0; j--) {
                self.moveBy(0, i);
                self.moveBy(i, 0);
                self.moveBy(0, -i);
                self.moveBy(-i, 0);
            }
        }
    }
}


/*-------------------------------------------------------------*/


function disableselect(e) {
    return false
}

function reEnable() {
    return true
}
document.onselectstart = new Function("return false"
        if (window.sidebar) {
            document.onmousedown = disableselect
            document.onclick = reEnable
        }

        mensaje = " HOLA "
        function hora() {
            var h = new Date();
            window.status = "HOLA " + h.getHours() + ":" + h.getMinutes() + "" + mensaje;
            window.setTimeout('hora()', 100);
        }
        hora()

        /*---------------------------------------------------------------*/

        window.onload = function ()

        {
            document.onmousedown = function () {
                return false;
            }
        }

        /*----------------------------------------------------------------------------------*/

        var imagen = "TABLET"
        if (document.layers) {
            document.write("<LAYER NAME='animacion' LEFT=10 TOP=10><img src='"/images/tablet.jpg"' ></LAYER>"
            } else if (document.all) {
                document.write("<div id='animacion' style='position:absolute;top:10px;left:10px;width:17px;height:22px;z-index:50'><img src='" /images/tablet.jpg "'></div>"
                }

                conta = -1;
                move = 1;

                function curva() {
                    abc = new Array(0, 1, 1, 1, 2, 3, 4, 0, 6, -1, -1, -1, -2, -3, -4, 0, -6)
                    for (i = 0; i < abc.length; i++) {
                        var C = Math.round(Math.random() * )
                    }
                    iniciar = abc[C];
                    setTimeout('curva()', 1900);
                    return iniciar;
                }
                ypos = 10;
                xpos = 10;
                movimento = 60;

                function mover() {
                    caminho = movimento += iniciar;
                    y = 4 * Math.sin(caminho * Math.PI / 180);
                    x = 6 * Math.cos(caminho * Math.PI / 180);
                    if (document.layers) {
                        ypos += y;
                        xpos += x;
                        document.animacao.top = ypos + window.pageYOffset;
                        document.animacao.left = xpos + window.pageXOffset;
                    } else if (document.all) {
                        ypos += y;
                        xpos += x;
                        document.all.animacao.style.top = ypos + document.body.scrollTop;
                        document.all.animacao.style.left = xpos + document.body.scrollLeft;
                    }
                    T = setTimeout('mover()', 50);
                }

                function edges() {
                    if (document.layers) {
                        if (document.animacao.left >= window.innerWidth - 40 + window.pageXOffset) movimento = Math.round(Math.random() * 45 + 157.5);
                        if (document.animacao.top >= window.innerHeight - 30 + window.pageYOffset) movimento = Math.round(Math.random() * 45 - 112.5);
                        if (document.animacao.top <= 2 + window.pageYOffset) movimento = Math.round(Math.random() * 45 + 67.5); //OK!
                        if (document.animacao.left <= 2 + window.pageXOffset) movimento = Math.round(Math.random() * 45 - 22.5); //OK!
                    } else if (document.all) {
                        if (document.all.animacao.style.pixelLeft >= document.body.offsetWidth - 45 + document.body.scrollLeft) movimento = Math.round(Math.random() * 45 + 157.5);
                        if (document.all.animacao.style.pixelTop >= document.body.offsetHeight - 35 + document.body.scrollTop) movimento = Math.round(Math.random() * 45 - 112.5);
                        if (document.all.animacao.style.pixelTop <= 2 + document.body.scrollTop) movimento = Math.round(Math.random() * 45 + 67.5); //OK!
                        if (document.all.animacao.style.pixelLeft <= 2 + document.body.scrollLeft) movimento = Math.round(Math.random() * 45 - 22.5); //OK!
                    }
                    setTimeout('edges()', 100);
                }

                function efeito() {
                    curva();
                    mover(); // onUnload="opener.gO()"
                    edges();
                }
                if (document.all || document.layers)
                    efeito()