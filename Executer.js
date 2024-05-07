function veriEkle(veri) {
    var kutu = document.getElementById("terminal");
    kutu.innerHTML += "lw-ide@terminal:~$ " +veri + "<br>";
    kutu.scrollTop = kutu.scrollHeight; // Otomatik olarak aşağı kaydır
}
function runCode() {
    // Giriş alanındaki JavaScript kodunu al
    var code = editor.getValue();
    // JavaScript kodunu çalıştır
    try {
        // console.log'un çıktısını yakalamak için console.log'u değiştir
        var console = { log: function(text) { veriEkle(text); } };
        // Girilen kodu çalıştır
        eval(code);
    } catch (error) {
        // Hata varsa hatayı göster
        document.getElementById("outputArea").innerText = "Hata: " + error.message;
    }
}