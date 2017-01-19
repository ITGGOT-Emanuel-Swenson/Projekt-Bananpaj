/**
 * Created by gondola on 1/17/17.
 */

var count = 0
var nIntervId;

function gallery() {
    nIntervId = setInterval(chngImg, 1000);
}

function chngImg() {
    count = count + 1
    if (count == 5) {
        count = 1
    }
    var oElem = document.getElementById("gall");
    oElem.src = "./img/" + count + ".jpg"
    }