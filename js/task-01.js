const listRef = document.querySelectorAll(".item");
console.log(listRef);

console.log("Number of categories: ", listRef.length);
console.log("");
listRef.forEach((element) => {
  const categoryName = element.firstElementChild.textContent;
  console.log("Сategory: ", categoryName);
  console.log(
    "Elements: ",
    element.lastElementChild.querySelectorAll("li").length
  );
  console.log("");
});
