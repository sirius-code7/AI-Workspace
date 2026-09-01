"use strict";

const content = document.querySelector("#content");

const summaryButton = document.querySelector("#summary-btn");

function displaySummaryModule() {

    content.innerHTML = `
        <section class="summary-module">

            <h2>Résumé de texte</h2>

            <textarea
                id="summary-input"
                placeholder="Saisissez votre texte..."
            ></textarea>

            <button id="generate-summary">
                Résumer
            </button>

            <div id="summary-result">

                Le résumé apparaîtra ici.

            </div>

        </section>
    `;

}