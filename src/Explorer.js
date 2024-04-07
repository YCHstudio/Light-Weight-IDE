document
	.getElementById("fileInput")
	.addEventListener("change", handleFileSelect);

function handleFileSelect(event) {
	const fileExplorer = document.getElementById("fileExplorer");
	fileExplorer.innerHTML = "";
	const files = event.target.files;

	if (files.length > 0) {
		const rootUl = document.createElement("ul");
		rootUl.classList.add("root");

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const fileName = file.webkitRelativePath.split("/");

			let currentUl = rootUl;
			for (let j = 0; j < fileName.length - 1; j++) {
				const folderName = fileName[j];
				let folderLi = currentUl.querySelector(`li[data-name="${folderName}"]`);
				if (!folderLi) {
					folderLi = document.createElement("li");
					folderLi.textContent = folderName;
					folderLi.dataset.name = folderName;
					folderLi.classList.add("folder");
					const innerUl = document.createElement("ul");
					folderLi.appendChild(innerUl);
					currentUl.appendChild(folderLi);
					folderLi.addEventListener("click", toggleFolder);
				}
				currentUl = folderLi.querySelector("ul");
			}

			const fileLi = document.createElement("li");
			fileLi.textContent = fileName[fileName.length - 1];
			currentUl.appendChild(fileLi);
		}

		fileExplorer.appendChild(rootUl);
	}
}

function toggleFolder(event) {
	const folderLi = event.currentTarget;
	folderLi.classList.toggle("open");
}
