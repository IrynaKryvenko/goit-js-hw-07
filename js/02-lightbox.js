import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"> <a class="gallery__link" href="${original}"> <img class="gallery__image" src="${preview}" alt="${description}"> </a> </li>`
  )
  .join("");

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);


galleryRef.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});
console.log(galleryItems);
