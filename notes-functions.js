//check for exsting or saved data

const getSavedNotes = function () {
  const notesJSON = localStorage.getItem("notes");
  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

//save the notres to local storage

const saveNotes = function (notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};

//remove note fomr the list
const removeNote = function (id) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === id;
  });
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

//generate DOM structure for note
const generateNoteDOM = function (note) {
  const noteEl = document.createElement("div");
  const textEl = document.createElement("a");
  const button = document.createElement("button");

  //set up remove note button
  button.textContent = "x";
  noteEl.appendChild(button);
  button.addEventListener("click", function () {
    //console.log(note);
    removeNote(note.id); //modigy
    saveNotes(notes); //save
    renderNotes(notes, filters); //display
  });

  //setup note title text

  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "Unread note";
  }
  textEl.setAttribute("href", `/edit.html#${note.id}`); //set link for each note
  noteEl.appendChild(textEl);
  return noteEl;
};

//render application notes
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  //console.log(filteredNotes);
  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDOM(note);

    document.querySelector("#notes").appendChild(noteEl);
  });
};
