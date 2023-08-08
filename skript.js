let swithMode = getElementById("swithMode")

swithMode.onclick = function () {
	let theme = document.getElementById("theme")

	if (theme.getAttribute("href") == "light-mode.css")
	theme.href = "dark-mode.css"
}
}