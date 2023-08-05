const input_box = document.querySelector("#input_box");
const list_container = document.querySelector("#list_container");
const addBtn = document.querySelector("button");

addBtn.addEventListener("click", () => {
  if (input_box.value === "") {
    alert("You must write something!");
  } else {
    const lists = document.createElement("li");
    lists.innerHTML = input_box.value;
    list_container.appendChild(lists);

    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "\u00d7";
    lists.appendChild(deleteBtn);
  }
  input_box.value = "";
  saveData();
});

list_container.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", list_container.innerHTML);
}

function showLists() {
  list_container.innerHTML = localStorage.getItem("data");
}
showLists();
