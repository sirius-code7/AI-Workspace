"use strict";

const content = document.querySelector("#content");

const summaryButton = document.querySelector("#summary-btn");

const translationButton = document.querySelector("#translation-btn");

const chatButton = document.querySelector("#chat-btn");


function displaySummaryModule() {

    content.innerHTML = `
        <section class="summary-module">

            <!-- module résumé de texte -->
            <h2>Résumé de texte</h2>

            <!-- zone de saisie -->
            <textarea
                id="summary-input"
                placeholder="Saisissez votre texte..."
            ></textarea>

            <!-- btn résumer -->
            <button id="generate-summary">
                Résumer
            </button>

            <!-- zone d'affichage du résumé simulé -->
            <div id="summary-result">

                Le résumé apparaîtra ici.

            </div>

        </section>
    `;

    const generateButton = document.querySelector("#generate-summary");

    generateButton.addEventListener("click", () => {

        const input = document.querySelector("#summary-input");

        const result = document.querySelector("#summary-result");

        if (input.value.trim() === "") {

            result.textContent = "Veuillez saisir un texte.";

            return;

        }

        result.textContent =
            "Résumé simulé : " +
            input.value.substring(0, 120) +
            "...";

    });
}

summaryButton.addEventListener("click", displaySummaryModule);



function displayTranslationModule() {

    content.innerHTML = `
        <section class="translation-module">

            <!-- module de traduction -->
            <h2>Traduction</h2>

            <!-- zone de saisie -->
            <textarea
                id="translation-input"
                placeholder="Saisissez votre texte..."
            ></textarea>

            <!-- sélection de la langue -->
            <select id="translation-language">

                <option value="anglais">Anglais</option>

                <option value="francais">Français</option>

                <option value="espagnol">Espagnol</option>

            </select>

            <!-- btn traduire -->
            <button id="translate-button">

                Traduire

            </button>

            <!-- zone d'affichage de la traduction simulée -->
            <div id="translation-result">

                La traduction apparaîtra ici.

            </div>

        </section>
    `;

    const translateButton =
    document.querySelector("#translate-button");

    translateButton.addEventListener(
        "click",
        simulateTranslation
    );

}

function simulateTranslation() {

    const input =
        document.querySelector("#translation-input");

    const language =
        document.querySelector("#translation-language");

    const result =
        document.querySelector("#translation-result");

    if (input.value.trim() === "") {

        result.textContent =
            "Veuillez saisir un texte.";

        return;

    }

    result.textContent =
        `Traduction simulée (${language.value}) : ${input.value}`;

}

translationButton.addEventListener("click", displayTranslationModule);



function displayChatModule() {

    content.innerHTML = `
        <section class="chat-module">

            <!-- module de chat -->

            <h2>Chat IA</h2>

            <!-- zone de saisie -->

            <input
                type="text"
                id="chat-input"
                placeholder="Posez votre question..."
            >

            <!-- btn envoyer -->

            <button id="chat-send">

                Envoyer

            </button>

            <!-- zone de réponse -->

            <div id="chat-response">

                La réponse apparaîtra ici.

            </div>

        </section>
    `;

    const chatSend =
    document.querySelector("#chat-send");

    chatSend.addEventListener(
        "click",
        simulateChat
    );

}

function simulateChat() {

    const input =
        document.querySelector("#chat-input");

    const response =
        document.querySelector("#chat-response");

    if (input.value.trim() === "") {

        response.textContent =
            "Veuillez saisir une question.";

        return;

    }

    response.textContent =
        `Réponse simulée : ${input.value}`;

}

chatButton.addEventListener("click", displayChatModule);
