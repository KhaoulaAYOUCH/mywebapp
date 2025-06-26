// extension-popup.js
// Handles the extension project code popup logic for Project-form.html

document.addEventListener('DOMContentLoaded', function() {
    const nouvelRadio = document.getElementById('nouvelProjet');
    const extensionRadio = document.getElementById('extensionProjet');
    const nouvelFields = document.getElementById('nouvelProjetFields');
    const extensionDisplayFields = document.getElementById('extensionDisplayFields');
    const extensionPopup = document.getElementById('extensionPopup');
    const popupCodeProjet = document.getElementById('popupCodeProjet');
    const popupCodeSubmit = document.getElementById('popupCodeSubmit');
    const codeProjetExtDisplay = document.getElementById('codeProjetExtDisplay');
    const entituleProjetExtDisplay = document.getElementById('entituleProjetExtDisplay');
    const secteurExtDisplay = document.getElementById('secteurExtDisplay');
    const dateDebutProjetExtDisplay = document.getElementById('dateDebutProjetExtDisplay');
    const dateFinProjetExtDisplay = document.getElementById('dateFinProjetExtDisplay');
    const mainProjectTitle = document.getElementById('mainProjectTitle');

    function showExtensionPopup() {
        extensionPopup.style.display = 'flex';
        nouvelFields.style.display = 'none';
        extensionDisplayFields.style.display = 'none';
        popupCodeProjet.value = '';
        popupCodeProjet.style.border = '';
    }
    function hideExtensionPopup() {
        extensionPopup.style.display = 'none';
    }
    function showExtensionDisplayFieldsWithData(code, entitule, secteur, dateDebut, dateFin) {
        extensionDisplayFields.style.display = 'block';
        codeProjetExtDisplay.value = code;
        entituleProjetExtDisplay.value = entitule;
        secteurExtDisplay.value = secteur;
        dateDebutProjetExtDisplay.value = dateDebut;
        dateFinProjetExtDisplay.value = dateFin;
    }
    function hideExtensionDisplayFields() {
        extensionDisplayFields.style.display = 'none';
    }
    nouvelRadio.addEventListener('change', function() {
        hideExtensionPopup();
        nouvelFields.style.display = 'block';
        hideExtensionDisplayFields();
        mainProjectTitle.textContent = 'Détails du projet';
    });
    extensionRadio.addEventListener('change', function() {
        showExtensionPopup();
        nouvelFields.style.display = 'none';
        hideExtensionDisplayFields();
        mainProjectTitle.textContent = "Détails du projet (Extension)";
    });
    // Remove popup trigger after extension code validation
    popupCodeSubmit.addEventListener('click', function() {
        if (popupCodeProjet.value.trim() !== '') {
            hideExtensionPopup();
            showExtensionDisplayFieldsWithData(
                popupCodeProjet.value,
                'Laayoune Port',
                'Building',
                '2025-01-01',
                '2025-12-31'
            );
            // Do NOT show popup here
        } else {
            popupCodeProjet.style.border = '1px solid red';
        }
    });
    // On load, default to Nouvel Projet
    nouvelFields.style.display = 'block';
    hideExtensionDisplayFields();
    hideExtensionPopup();
});
