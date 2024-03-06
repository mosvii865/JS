var imagenes = ["IMG/Malenia.webp", "IMG/MELINA.jpeg", "IMG/QueenMarika.jpg", "IMG/Ranni.jpg", "IMG/Rennala.jpg"];

var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
		var index = this.id.slice(-1);
		document.body.style.backgroundImage = "url(" + imagenes[index - 1] + ")";
	});
}
