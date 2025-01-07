document.addEventListener("DOMContentLoaded", function () {
    const text = "estou escrevendo isso antes de te ver, mas tenho certeza que você está linda. Te encontrei, te olhei, te admirei e pensei: foi feita para mim! Te dedico esse trecho (0:44 até 1:55), porque me lembra você ";
    const speed = 100;
    const maxCharsPerLine = 40; // Limite de caracteres por linha
    let index = 0;

    const textElement = document.getElementById("text");
    const botaoiniciar = document.getElementById("botaoiniciar");
    const musicafundo = document.getElementById("musicafundo");

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index); // Adiciona um caractere por vez

            // Verifica se o número de caracteres ultrapassou o limite por linha
            if (textElement.innerHTML.length % maxCharsPerLine === 0) {
                textElement.innerHTML += "<br>"; // Adiciona uma quebra de linha
            }

            index++;
            setTimeout(typeWriter, speed); // Chama novamente para adicionar o próximo caractere
        }
    }

    botaoiniciar.addEventListener("click", () => {
        textElement.innerHTML = ""; // Limpa o texto antes de começar
        index = 0;
        typeWriter(); // Inicia a escrita do texto

        // Toca a música quando o botão for clicado
        musicafundo.play().then(() => {
            console.log("musica tocando");
        }).catch(error => {
            console.error("erro na musica", error);
        });
    });
});
