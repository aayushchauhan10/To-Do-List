const form = document.querySelector("#add-form");
const input = document.querySelector("#add-input");
const list = document.querySelector("#list");

let items = [];

function addItem(text) {
  const item = {
    id: Date.now(),
    text,
    complete: false,
  };

  items.push(item);
  displayList();
}

function displayList() {
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item.text;
    if (item.complete) {
      li.classList.add("complete");
    }

    li.addEventListener("click", () => {
      item.complete = !item.complete;
      displayList();
    });

    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (text !== "") {
    addItem(text);
    input.value = "";
    input.focus();
  }
});

displayList();
