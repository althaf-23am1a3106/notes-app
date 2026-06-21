let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
    const container = document.getElementById("notesContainer");
    container.innerHTML = "";

    notes.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.classList.add("note");

        noteDiv.innerHTML = `
            <p>${note}</p>
            <button class="delete-btn" onclick="deleteNote(${index})">
                Delete
            </button>
        `;

        container.appendChild(noteDiv);
    });
}

function addNote() {
    const input = document.getElementById("noteInput");
    const noteText = input.value.trim();

    if (noteText === "") {
        alert("Please enter a note");
        return;
    }

    notes.push(noteText);
    saveNotes();
    renderNotes();

    input.value = "";
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
}

renderNotes();