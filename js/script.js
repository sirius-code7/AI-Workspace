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

const historyButton = document.querySelector("#history-btn");


/* ==========================
    MODULE DE RÉSUMÉ DE TEXTE
========================== */

function displaySummaryModule() {

    content.innerHTML = `
        <section class="summary-module">

            <div class="summary-header">
                <h2>Résumé de texte</h2>
                <p>
                    Collez un document afin d'obtenir automatiquement un résumé.
                </p>
            </div>

            <div class="summary-card">

                <label for="summary-input">
                    Texte à résumer
                </label>

                <textarea
                    id="summary-input"
                    placeholder="Saisissez ou collez votre texte ici..."
                ></textarea>

                <button id="generate-summary">
                    Résumer
                </button>

                <div id="summary-result">
                    Le résumé apparaîtra ici.
                </div>

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

        saveHistory("Résumé de texte", input.value);

    });
}

summaryButton.addEventListener("click", displaySummaryModule);



/* ==========================
    MODULE DE TRADUCTION
========================== */
function displayTranslationModule() {

    content.innerHTML = `
        <section class="translation-module">

            <div class="translation-header">
                <h2>Traduction</h2>
                <p>
                    Traduisez rapidement un texte vers une autre langue.
                </p>
            </div>

            <div class="translation-card">

                <label for="translation-input">
                    Texte à traduire
                </label>

                <textarea
                    id="translation-input"
                    placeholder="Saisissez votre texte..."
                ></textarea>

                <label for="translation-language">
                    Langue cible
                </label>

                <select id="translation-language">
                    <option value="anglais">
                        Anglais
                    </option>

                    <option value="francais">
                        Français
                    </option>

                    <option value="espagnol">
                        Espagnol
                    </option>
                </select>

                <button id="translate-button">
                    Traduire
                </button>

                <div class="translation-result-card">

                    <label>
                        Résultat
                    </label>

                    <div id="translation-result">
                        La traduction apparaîtra ici.
                    </div>

                </div>

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

        saveHistory("Traduction", input.value);

}

translationButton.addEventListener("click", displayTranslationModule);



/* ==========================
    MODULE DE CHAT
========================== */
function displayChatModule() {

    content.innerHTML = `
        <section class="chat-module">

            <div class="chat-header">
                <h2>Chat IA</h2>
                <p>
                    Discutez avec votre assistant intelligent.
                </p>
            </div>

            <div class="chat-card">

                <label for="chat-input">
                    Votre question
                </label>

                <input
                    type="text"
                    id="chat-input"
                    placeholder="Posez votre question..."
                >

                <button id="chat-send">
                    Envoyer
                </button>

                <div class="chat-response-card">

                    <label>
                        Réponse
                    </label>

                    <div id="chat-response">
                        La réponse apparaîtra ici.
                    </div>

                </div>

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

        saveHistory("Chat", input.value);

}

chatButton.addEventListener("click", displayChatModule);



/* ==========================
    MODULE DE PRÉDICTION
========================== */
function displayPredictionModule() {

    content.innerHTML = `
        <section class="prediction-module">

            <div class="prediction-header">
                <h2>Prédiction</h2>
                <p>
                    Simulez une prédiction grâce à un modèle IA.
                </p>
            </div>

            <div class="prediction-card">

                <label for="prediction-age">
                    Âge
                </label>

                <input
                    type="number"
                    id="prediction-age"
                    placeholder="Âge"
                >

                <label for="prediction-income">
                    Revenu
                </label>

                <input
                    type="number"
                    id="prediction-income"
                    placeholder="Revenu"
                >

                <label for="prediction-city">
                    Ville
                </label>

                <input
                    type="text"
                    id="prediction-city"
                    placeholder="Ville"
                >

                <button id="predict-button">
                    Prédire
                </button>

                <div class="prediction-result-card">

                    <label>
                        Résultat
                    </label>

                    <div id="prediction-result">
                        La prédiction apparaîtra ici.
                    </div>

                </div>

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

        saveHistory("Prédiction", `${age.value}, ${income.value}, ${city.value}`);

}

predictMenuButton.addEventListener("click", displayPredictionModule);



/* ==========================
   HISTORIQUE
========================== */

let history = JSON.parse(
    localStorage.getItem("history")
) || [];

/* ==========================
   HISTORIQUE SYS
========================== */

function saveHistory(type, request) {

    history.push({

        type,

        request,

        date: new Date().toLocaleString()

    });

    localStorage.setItem(

        "history",

        JSON.stringify(history)

    );

}

/* ==========================
    MODULE HISTORIQUE
========================== */

function displayHistoryModule() {

    content.innerHTML = `
        <section class="history-module">

            <div class="history-header">
                <h2>Historique</h2>
                <p>
                    Retrouvez toutes vos interactions.
                </p>
            </div>

            <div class="history-card">

                <label for="history-search">
                    Rechercher
                </label>

                <input
                    type="text"
                    id="history-search"
                    placeholder="Rechercher..."
                >

                <button id="clear-history">
                    Vider l'historique
                </button>

                <ul id="history-list"></ul>

            </div>

        </section>
`;

    renderHistory();

    const historySearch =
    document.querySelector("#history-search");

        historySearch.addEventListener(

            "input",

            event => {

                renderHistory(event.target.value);

            }
        );

/* ==========================
    SUPPRESSION D'UNE ENTRÉE DE L'HISTORIQUE
========================== */
        document.addEventListener("click", event => {

            if (

                event.target.classList.contains(

                    "delete-history"

                )

            ) {

                history.splice(

                    event.target.dataset.index,

                    1

                );

                localStorage.setItem(

                    "history",

                    JSON.stringify(history)

                );

                renderHistory();

            }

        });

/* ==========================
    VIDANGE DE L'HISTORIQUE
========================== */
        const clearHistory =
        document.querySelector("#clear-history");

            clearHistory.addEventListener("click", () => {

                history = [];

                localStorage.removeItem("history");

                renderHistory();

            });
}

historyButton.addEventListener("click",displayHistoryModule);



/* ==========================
    AFFICHAGE + RECHERCHE HISTORIQUE
========================== */

function renderHistory(search = "") {

    const historyList =
        document.querySelector("#history-list");

    historyList.innerHTML = "";

    const filteredHistory = history.filter(item =>

        item.request
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    filteredHistory.forEach((item, index) => {

        historyList.innerHTML += `

            <li>

                <strong>${item.type}</strong>

                <p>${item.request}</p>

                <small>${item.date}</small>

                <button
                    class="delete-history"
                    data-index="${index}"
                >

                    Supprimer

                </button>

            </li>

        `;

    });

}