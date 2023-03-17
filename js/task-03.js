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
function createGallery(images, referecnce) {
  images.forEach((element) => {
    referecnce.insertAdjacentHTML(
      "beforeend",
      `<li class = "item"><img src ="${element.url}" alt ="${element.alt}"width="270"></li>`
    );
  });
}

const galleryRef = document.querySelector(".gallery");
galleryRef.style = "display: flex; list-style-type: none;";
// galleryRef.style = "list-style-type: none";
createGallery(images, galleryRef);
