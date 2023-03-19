const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = images.map((image) => {
  const fragment = document.createElement("li");
  fragment.classList.add("item");
  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;
  img.width = 270;
  fragment.appendChild(img);
  return fragment;
});

const galleryRef = document.querySelector(".gallery");
galleryRef.style = "display: flex; list-style-type: none;";
// galleryRef.style = "list-style-type: none";
galleryRef.append(...list);
