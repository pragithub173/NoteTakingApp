"use.strict";
const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeElement = document.querySelector("#remove-note");
const dateElement = document.querySelector("#last-edited");
const noteId = location.hash.substring(1); //getting id
let notes = getSavedNotes();
let note = notes.find((note) => note.id === noteId);

if (!note) {
  location.assign("/index.html");
}

titleElement.value = note.title;
bodyElement.value = note.body; //reassigning variable
dateElement.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener("input", (e) => {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt); //passing the above value
  saveNotes(notes);
});

bodyElement.addEventListener("input", (e) => {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf(); //updating the time
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

removeElement.addEventListener("click", (e) => {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("/index.html");
});
//to see updates in different pages
window.addEventListener("storage", (e) => {
  //key is the value that is change , we got it from inspection in console array
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    note = notes.find((note) => note.id === noteId);

    if (!note) {
      location.assign("/index.html");
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
  }
});
