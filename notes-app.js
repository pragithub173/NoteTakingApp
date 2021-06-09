
"use.strict";
let notes = getSavedNotes();

const filters = {
  searchText: "",
  sortBy: "byEdited",
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", (e) => {
  const id = uuidv4();
  const timestamp = moment().valueOf();
  //console.log("Hello pradeep here");
  // e.target.textContent = "This button was clicked";
  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timestamp,
    updatedAt: timestamp,
  });
  saveNotes(notes);
  location.assign(`/edit.html#${id}`);
});



document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

// this is for the updateing title in edit page and taht is refelcting on the home page
window.addEventListener("storage", (e) => {
  //key is the value that is change , we got it from inspection in console array
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

