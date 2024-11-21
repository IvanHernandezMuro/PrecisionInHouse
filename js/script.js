function toggleLanguage() {
	var currentLang = document.documentElement.lang;
	if (currentLang === 'es') {
		document.documentElement.lang = 'en';
		document.querySelector('.language-toggle').innerText = 'Switch to Spanish';
		document.getElementById('content').innerHTML =
			'<h1>Hello! Welcome to my page.</h1><p>This is an example of a multilingual page.</p>';
	} else {
		document.documentElement.lang = 'es';
		document.querySelector('.language-toggle').innerText = 'Cambiar a Inglés';
		document.getElementById('content').innerHTML =
			'<h1>¡Hola! Bienvenido a mi página.</h1><p>Este es un ejemplo de una página multilingüe.</p>';
	}
}
