const vecesJugar = parseInt(prompt("¿Cuántas veces deseas jugar?"));
jugarCachipun(vecesJugar);

function jugarCachipun(veces) {
    for (let i = 0; i < veces; i++) {
        let jugadaUsuario = parseInt(
            prompt("Ingrese su jugada (Piedra = 0, Papel = 1 o Tijera = 2): ")
        );

        if (jugadaUsuario != 0 && jugadaUsuario != 1 && jugadaUsuario != 2) {
            console.log(jugadaUsuario);
            alert("Por favor, ingrese una opción válida.");
            while (true) {
                jugadaUsuario = parseInt(
                    prompt(
                        "Ingrese su jugada (Piedra = 0, Papel = 1 o Tijera = 2): "
                    )
                );
                if (
                    jugadaUsuario === 0 ||
                    jugadaUsuario === 1 ||
                    jugadaUsuario === 2
                ) {
                    break;
                }
                alert("Por favor, ingrese una opción válida.");
            }
        }

        const jugadaMaquina = Math.floor(Math.random() * 3);
        alert(
            "La maquina a jugado " +
                jugadaMaquina +
                " (Piedra = 0, Papel = 1 o Tijera = 2)"
        );

        if (jugadaUsuario === jugadaMaquina) {
            alert("¡Es un empate!");
        } else if (
            (jugadaUsuario === 0 && jugadaMaquina === 2) ||
            (jugadaUsuario === 1 && jugadaMaquina === 0) ||
            (jugadaUsuario === 2 && jugadaMaquina === 1)
        ) {
            alert("¡Felicidades! ¡Has ganado!");
        } else {
            alert("Lo siento, has perdido contra la máquina.");
        }
    }
}
