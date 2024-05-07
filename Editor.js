// Monaco Editor'u oluşturma
require.config({
	paths: {
		vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.48.0/min/vs",
	},
});
require(["vs/editor/editor.main"], function () {
	var editor = monaco.editor.create(document.getElementById("editor"), {
		value: [
			'// Boş bir görev listesi oluşturuluyor',
'var tasks = [];',
,
'// Yeni bir görev eklemek için fonksiyon',
'function addTask(taskDescription) {',
'    var newTask = {',
'        description: taskDescription,',
'        completed: false',
'    };',
'    tasks.push(newTask);',
'    console.log("Yeni görev eklendi:", taskDescription);',
'}',
,
'// Görev listesini görüntülemek için fonksiyon',
'function listTasks() {',
'    console.log("Görevler:");',
'    tasks.forEach(function(task, index) {',
'        console.log(index + 1 + ". " + (task.completed ? "[X]" : "[ ]") + " " + task.description);',
'    });',
'}',
,
'// Bir görevi tamamlanmış olarak işaretlemek için fonksiyon',
'function completeTask(taskIndex) {',
'    if (taskIndex >= 0 && taskIndex < tasks.length) {',
'        tasks[taskIndex].completed = true;',
'        console.log("Görev tamamlandı:", tasks[taskIndex].description);',
'    } else {',
'        console.log("Geçersiz görev numarası.");',
'    }',
'}',
,
'// Bir görevi silmek için fonksiyon',
'function deleteTask(taskIndex) {',
'    if (taskIndex >= 0 && taskIndex < tasks.length) {',
'        var deletedTask = tasks.splice(taskIndex, 1);',
'        console.log("Görev silindi:", deletedTask[0].description);',
'    } else {',
'        console.log("Geçersiz görev numarası.");',
'    }',
'}',
,
'// Kullanıcıya komutları kabul etmek için basit bir döngü',
'while (true) {',
'    var command = prompt("Ne yapmak istersiniz? (ekle/liste/tamamla/sil/çıkış)");',
,
'    if (command === "ekle") {',
'        var taskDescription = prompt("Yeni görevin açıklaması nedir?");',
'        addTask(taskDescription);',
'    } else if (command === "liste") {',
'        listTasks();',
'    } else if (command === "tamamla") {',
'        var taskIndex = prompt("Tamamlanan görevin numarası nedir?");',
'        completeTask(taskIndex - 1); // Görev numarası 1\'den başladığı için -1',
'    } else if (command === "sil") {',
'        var taskIndex = prompt("Silinecek görevin numarası nedir?");',
'        deleteTask(taskIndex - 1); // Görev numarası 1\'den başladığı için -1',
'    } else if (command === "çıkış") {',
'        console.log("Görev yöneticisi uygulaması kapatıldı.");',
'        break;',
'    } else {',
'        console.log("Geçersiz komut. Lütfen tekrar deneyin.");',
'    }',
'}'

		].join("\n"),
		language: "rust",
		theme: "vs-dark",
		autoIndent: "full",
		contextmenu: true,
		fontFamily: "monospace",
		fontSize: 13,
		lineHeight: 24,
		hideCursorInOverviewRuler: true,
		matchBrackets: "always",
		minimap: {
			enabled: true,
		},
		scrollbar: {
			horizontalSliderSize: 4,
			verticalSliderSize: 18,
		},
		selectOnLineNumbers: true,
		roundedSelection: true,
		readOnly: false,
		cursorStyle: "line",
		automaticLayout: true,
	});

	window.editor = editor;
});
