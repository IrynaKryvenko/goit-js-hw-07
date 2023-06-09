import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryRef = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"> <a class="gallery__link" href="${original}"> <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"> </a> </li>`
  )
  .join("");

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
console.log(galleryItems);

galleryRef.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
    
const source = event.target.dataset.source;
    
 const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscapeKey);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscapeKey);
      },
    }
  );
  instance.show();


    window.addEventListener('keydown', onEscapeKey);

    function onEscapeKey(event) {
        if (event.code === 'Escape') {
            instance.close();
        };
    };
};

