const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listRef = document.querySelector("#ingredients");

const list = ingredients.map((element) => {
  const fragment = document.createElement("li");
  fragment.textContent = element;
  fragment.classList.add("item");
  return fragment;
});
//console.log(list);
listRef.append(...list);
