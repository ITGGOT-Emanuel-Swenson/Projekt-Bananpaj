/**
 * Created by gondola on 1/17/17.
 */
function chngimg(b) {
    var logo = document.getElementById('gall');
    logo.src = b;

}
function gallery(e) {
    var logo = document.getElementById('gall');
    for (i = 0; i < 4; i++) {
    file = "./img/" + i + ".jpg" ;

    setInterval(function(){ chngimg(file); }, 3000);
    }
}