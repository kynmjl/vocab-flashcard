function navigateTo(page) {
    window.location.href = page;
}




// Beispielhafte Datenstruktur für Vokabelsets
const vocabularySets = {
    set1: [
        { translation: "House", word: "Haus" },
        { translation: "Dog", word: "Hund" },
    ],
    set2: [
        { translation: "Car", word: "Auto" },
        { translation: "Tree", word: "Baum" },
    ],
    set3: [
        { translation: "Book", word: "Buch" },
        { translation: "Chair", word: "Stuhl" },
    ]
};

// Funktion zum Anzeigen der Vokabelsets
function showVocabularySets() {
    const container = document.getElementById('sets-container');
    container.innerHTML = '';

    Object.keys(vocabularySets).forEach(setKey => {
        const setDiv = document.createElement('div');
        setDiv.className = 'vocabulary-set';
        setDiv.textContent = `Vokabelset ${setKey}`;
        setDiv.onclick = () => selectSet(setKey);
        container.appendChild(setDiv);
    });
}

// Funktion, um auf ein Set zuzugreifen (unterschiedlich pro Seite)
function selectSet(setKey) {
    const page = window.location.pathname.split('/').pop();
    if (page === 'site1.html') {
        window.location.href = `flashcards.html?set=${setKey}`;
    } else if (page === 'site2.html') {
        window.location.href = `list.html?set=${setKey}`;
    } else if (page === 'site3.html') {
        window.location.href = `manage.html?set=${setKey}`;
    }
}

// Aufrufen beim Laden der Seite
window.onload = function() {
    showVocabularySets();
};
