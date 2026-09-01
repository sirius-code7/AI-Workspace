"use strict";

const content = document.querySelector("#content");

const summaryButton = document.querySelector("#summary-btn");

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