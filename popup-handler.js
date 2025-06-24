// popup-handler.js
// Handles showing the popup message for project form submission

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('mainSubmitBtn');
    const nouvelRadio = document.getElementById('nouvelProjet');
    const extensionRadio = document.getElementById('extensionProjet');
    const nouvelFields = document.getElementById('nouvelProjetFields');
    const extensionDisplayFields = document.getElementById('extensionDisplayFields');

    function showPopup(isExtension) {
        var popup = document.getElementById('popupOverlay');
        var popupMsg = popup.querySelector('h2');
        if (isExtension) {
            popupMsg.textContent = 'Projet modifié avec succès';
        } else {
            popupMsg.textContent = 'Votre projet est ajouté avec succès';
        }
        popup.style.display = 'flex';
        function hidePopup() {
            popup.style.display = 'none';
            document.removeEventListener('mousedown', hidePopup);
        }
        setTimeout(hidePopup, 5000);
        setTimeout(function() {
            document.removeEventListener('mousedown', hidePopup);
        }, 5000);
        setTimeout(function() {
            document.addEventListener('mousedown', hidePopup);
        }, 10);
    }

    submitBtn.onclick = function(e) {
        e.preventDefault();
        if (extensionRadio.checked && extensionDisplayFields.style.display === 'block') {
            showPopup(true);
        } else if (nouvelRadio.checked && nouvelFields.style.display === 'block') {
            showPopup(false);
        }
    };
});
