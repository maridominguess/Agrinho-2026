// ===============================
// FLASHCARDS DE PROGRAMAÇÃO
// ===============================

// Seleciona todos os flashcards da página
const flashcards = document.querySelectorAll(".flashcard");

// Adiciona um evento de clique em cada flashcard
flashcards.forEach((flashcard) => {

    flashcard.addEventListener("click", () => {

        // Adiciona ou remove a classe "virado"
        flashcard.classList.toggle("virado");

    });

});

// ===============================
// Mensagem de boas-vindas
// ===============================

window.addEventListener("load", () => {
    console.log("📚 Bem-vindo ao site de Flashcards de Programação!");
    console.log("💻 Clique em um flashcard para ver a resposta.");
});
