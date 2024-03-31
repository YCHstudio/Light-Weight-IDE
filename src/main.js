
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



// Dosya listesi oluşturma işlevi
function populateFileList() {
    var fileList = document.getElementById('fileList');
    var files = ['file1.rs', 'file2.rs', 'file3.rs']; // Örnek dosya listesi, gerçek dosya listesini buraya yerleştirin

    fileList.innerHTML = ''; // Dosya listesini temizle

    files.forEach(function(file) {
        var li = document.createElement('li');
        li.textContent = file;
        fileList.appendChild(li);
    });
}