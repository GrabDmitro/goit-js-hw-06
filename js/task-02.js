const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listRef = document.querySelector("#ingredients");

function createList(list, reciever) {
  list.forEach((element) => {
    const fragment = document.createElement("li");
    fragment.textContent = element;
    fragment.classList.add("item");
    reciever.appendChild(fragment);
  });
}
createList(ingredients, listRef);
