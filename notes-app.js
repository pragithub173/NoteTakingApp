// const para = document.querySelector("p");
// console.log(para);
// para.remove();

// const paras = document.querySelectorAll("p");
// console.log(paras);

// paras.forEach(function (n) {
//   n.textContent = "********";
//   //   console.log(n.textContent); // used to show content with all the p tag
//   //   n.remove();
// });

// //adding a new element
// const newParagraph = document.createElement("p"); //creates a element by tag
// newParagraph.textContent = "This is the newly added paragraph";
// document.querySelector("body").appendChild(newParagraph);

// const notes = [
//   {
//     title: "book1",
//     description: "fruits",
//   },
//   {
//     title: "book2",
//     description: "veg",
//   },
//   {
//     title: "not today",
//     description: "nonveg",
//   },
// ];

// const filters = {
//   searchText: "",
// };

// const user = {
//   name: "Pradeep",
//   age: 25,
// };
// const userJSON = JSON.stringify(user);
// // console.log(userJSON);

// const UserDetails = localStorage.getItem("user");
// const user = JSON.parse(UserDetails);
// console.log(`${user.name} is ${user.age}`);

// localStorage.setItem("user", userJSON); //setting upto local storge

//localStorage.setItem("location", "Chicago");//set

// localStorage.getItem("location");
// console.log(localStorage.getItem("location"));//get

//localStorage.setItem("location", "Illinois");//update

//localStorage.removeItem("location");//removes key

//localStorage.clear();//clears all the data
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

// document.querySelector("#delete-note").addEventListener("click", function () {
//   //console.log("Delete items");
//   document.querySelectorAll(".note").forEach(function (notes) {
//     notes.remove();
//   });
// });

// document.querySelector("input").addEventListener("change", function (e) {
//   e.target.value = "Value changed";
// });

// document.querySelector("input").addEventListener("change", function (e) {
//   console.log(e.target.value);
// });

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

// document.querySelector("#name-form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(e.target.elements.firstName.value);
//   e.target.elements.firstName.value = "";
// });

// document.querySelector("#for-fun").addEventListener("change", function (e) {
//   console.log(e.target.checked);
// });
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

//dates

// const now = moment(); //now has the date
// //console.log(now);
// console.log(now.toString());

// //now.minute(1);

// //console.log(now.toString()); //prints the minute set

// //console.log(now.minute());  //prints the default minute

// now.add(1, "year");

// console.log(now.toString());

// now.subtract(1, "week").subtract(20, "days");

// console.log(now.toString());

// console.log(now.format("MMM Do, YYYY"));

// console.log(now.fromNow());

// const nowTimeStamp = now.valueOf();

// console.log(moment(nowTimeStamp).toString());

// const bDate = moment();
// console.log(bDate.toString()); //todays date

// bDate.year(1994).month(9).day(36);

// // bDate.subtract(25, "years").subtract(9, "months").add(30, "days");
// console.log(bDate.format("MMM Do, YYYY"));

// console.log(Date());
