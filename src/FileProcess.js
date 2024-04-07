// Dosyayı kaydetme işlevi
function saveFile() {
    var code = window.editor.getValue();
    var blob = new Blob([code], { type: 'text/plain;charset=utf-8' });

    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'kodun_adi.rs';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
