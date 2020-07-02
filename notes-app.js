let notes = getSavedNotes();

const filters = {
  searchText: "",
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function (e) {
  const id = uuidv4();
  //console.log("Hello pradeep here");
  // e.target.textContent = "This button was clicked";
  notes.push({
    id: id,
    title: "",
    body: "",
  });
  saveNotes(notes);
  //renderNotes(notes, filters); because we are going to eit page
  location.assign(`/edit.html#${id}`);
});

document.querySelector("input").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});

// this is for the updateing title in edit page and taht is refelcting on the home page
window.addEventListener("storage", function (e) {
  //key is the value that is change , we got it from inspection in console array

  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

//dates

const bDate = moment();
console.log(bDate.toString()); //todays date

bDate.year(1994).month(9).day(36);

// bDate.subtract(25, "years").subtract(9, "months").add(30, "days");
console.log(bDate.format("MMM Do, YYYY"));

console.log(Date());
