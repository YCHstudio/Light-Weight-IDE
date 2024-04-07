// Monaco Editor'u oluşturma
require.config({
	paths: {
		vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.27.0/min/vs",
	},
});
require(["vs/editor/editor.main"], function () {
	var editor = monaco.editor.create(document.getElementById("editor"), {
		value: [
			"// Welcome to Rust Tauri IDE!",
			"fn main() {",
			'\tprintln!("Hello, world!");',
			"}",
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

	// Dosya listesini oluştur

	// saveFile fonksiyonunu çağırabilmek için editor nesnesini bir değişkene atayın
	window.editor = editor;
});
