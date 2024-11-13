window.onload = function() {
    // Variables
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const contenedorPalabra = document.getElementById('contenedor-palabra');
    const vidasTexto = document.getElementById('vidas');
    const mensajePista = document.getElementById('mensaje-pista');
    let palabraSeleccionada = '';
    let vidas = 10;
    let letrasAdivinadas = [];
    let categoria = 'Animales';

    let palabras = {
        Animales: [
            { palabra: 'perro', pista: 'Canino' },
            { palabra: 'ornitorrinco', pista: 'Mamifero pato' },
            { palabra: 'elefante', pista: 'Mamifero terrestre mas grande' },
            { palabra: 'cuervo', pista: 'Ave carroñera' }
        ]
    };


    function escogerPalabra() {
        let palabrasCategoria = palabras[categoria];
        let palabraAleatoria = palabrasCategoria[Math.floor(Math.random() * palabrasCategoria.length)];
        palabraSeleccionada = palabraAleatoria.palabra;
        mensajePista.textContent = '';
        return palabraAleatoria;
    }

    function inicializarJuego() {
        let datosPalabra = escogerPalabra();
        letrasAdivinadas = [];
        vidas = 10;
        vidasTexto.textContent = vidas;
        mostrarPalabra();
        mostrarAlfabeto();
        document.getElementById('pista').onclick = () => mostrarPista(datosPalabra.pista);
    }

    function mostrarAlfabeto() {
        const contenedorAlfabeto = document.getElementById('alfabeto');
        contenedorAlfabeto.innerHTML = '';

        for (let letra of alfabeto) {
            let boton = document.createElement('button');
            boton.textContent = letra;
            boton.onclick = () => manejarAdivinanza(letra, boton);
            contenedorAlfabeto.appendChild(boton);
        }
    }

    function mostrarPalabra() {
        contenedorPalabra.innerHTML = palabraSeleccionada.split('').map(letra => letrasAdivinadas.includes(letra) ? letra : '_').join(' ');
    }

    function manejarAdivinanza(letra, boton) {
        boton.classList.add('desactivado');
        boton.disabled = true;

        if (palabraSeleccionada.includes(letra)) {
            letrasAdivinadas.push(letra);
            mostrarPalabra();
            verificarGanador();
        } else {
            vidas--;
            vidasTexto.textContent = vidas;
            verificarFinDelJuego();
        }
    }

    function mostrarPista(pista) {
        mensajePista.textContent = `Pista: ${pista}`;
    }

    function verificarGanador() {
        if (palabraSeleccionada.split('').every(letra => letrasAdivinadas.includes(letra))) {
            mensajePista.textContent = '¡Enhorabuena!';
            desactivarAlfabeto();
        }
    }

    function verificarFinDelJuego() {
        if (vidas <= 0) {
            mensajePista.textContent = `Perdiste. La palabra era "${palabraSeleccionada}".`;
            desactivarAlfabeto();
        }
    }

    function desactivarAlfabeto() {
        document.querySelectorAll('#alfabeto button').forEach(boton => {
            boton.disabled = true;
            boton.classList.add('desactivado');
        });
    }

    document.getElementById('reiniciar').onclick = () => {
        inicializarJuego();
    };

    inicializarJuego();
};
