"use strict";

const content = document.querySelector("#content");

const dashboardButton = document.querySelector("#dashboard-btn");

    dashboardButton.addEventListener("click", () => {
        window.location.href = "index.html";
    });

const summaryButton = document.querySelector("#summary-btn");

const translationButton = document.querySelector("#translation-btn");

const chatButton = document.querySelector("#chat-btn");

const predictMenuButton = document.querySelector("#predict-btn");


/* ==========================
    MODULE DE RÉSUMÉ DE TEXTE
========================== */

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



/* ==========================
    MODULE DE TRADUCTION
========================== */
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

/* ==========================
    SIMULATION DE TRADUCTION
========================== */
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



/* ==========================
    MODULE DE CHAT
========================== */
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

/* ==========================
    SIMULATION DE CHAT
========================== */
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



/* ==========================
    MODULE DE PRÉDICTION
========================== */
function displayPredictionModule() {

    content.innerHTML = `
        <section class="prediction-module">

            <h2>Prédiction</h2>

            <input
                type="number"
                id="prediction-age"
                placeholder="Âge"
            >

            <input
                type="number"
                id="prediction-income"
                placeholder="Revenu"
            >

            <input
                type="text"
                id="prediction-city"
                placeholder="Ville"
            >

            <button id="predict-button">

                Prédire

            </button>

            <div id="prediction-result">

                La prédiction apparaîtra ici.

            </div>

        </section>
    `;

    const predictButton =
    document.querySelector("#predict-button");

    predictButton.addEventListener(
        "click",
        simulatePrediction
    );
}

/* ==========================
    SIMULATION DE PRÉDICTION
========================== */
function simulatePrediction() {

    const age =
        document.querySelector("#prediction-age");

    const income =
        document.querySelector("#prediction-income");

    const city =
        document.querySelector("#prediction-city");

    const result =
        document.querySelector("#prediction-result");

    if (
        age.value.trim() === "" ||
        income.value.trim() === "" ||
        city.value.trim() === ""
    ) {

        result.textContent =
            "Veuillez remplir tous les champs.";

        return;

    }

    result.textContent =
        `Prédiction (fictive) : ${age.value} ans, ${income.value} €, ${city.value}`;

}

predictMenuButton.addEventListener("click", displayPredictionModule);



/* ==========================
   HISTORIQUE
========================== */

let history = JSON.parse(
    localStorage.getItem("history")
) || [];