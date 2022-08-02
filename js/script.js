document.getElementById("pdip").onclick = function () {
    document.getElementById("gambarpartai").src = "gambar/gambarpdi.jpg";
}

document.getElementById("golkar").onclick = function () {
    document.getElementById("gambarpartai").src = "gambar/gambargolkar.jpg";
}

document.getElementById("gerindra").onclick = function () {
    document.getElementById("gambarpartai").src = "gambar/gambargerindra.jpeg";
}

document.getElementById("refresh").onclick = function (){
    document.getElementById("gambarpartai").src="";
}

document.getElementById("pilih").onclick = function (){
    alert("Selamat anda telah menjadi tim sukses partai tersebut!")
}

document.getElementById("tampil").onclick = function () {
    var a = document.getElementById("text").value;
    alert(a);
}

document.getElementById("submit").onclick = function () {
    var tebakan = document.getElementById("tebakan").value;
    var jawaban = "bapa bapa";

    if (tebakan == jawaban) {
        alert("anjay benar");
    }
    else if (tebakan == "") {
        alert("Anda belom menjawab");
      }
    
    else {
        alert("yahaha salah");
    }
    
}