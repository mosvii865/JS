var imagenes = ["IMG/1272163.jpg", "IMG/202171318271963_1.jpg", "IMG/seasons.jpg", "IMG/wallpaper.jpg", "IMG/wild.jpg"];

var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
		var index = this.id.slice(-1);
		document.body.style.backgroundImage = "url(" + imagenes[index - 1] + ")";
	});
}
