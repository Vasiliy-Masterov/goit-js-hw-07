import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector("body .gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEl.addEventListener("click", showLargeImage);

function createGalleryMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => 
 `<div class="gallery__item">
    <a class="gallery__link" href='${original}'>
      <img
        class="gallery__image" src='${preview}'
        data-source='${original}'
        alt='${description}'
      />
    </a>
  </div>`
).join("");}

function showLargeImage(event) {
  event.preventDefault();
  const modalWindow = basicLightbox.create(`
  <img class="is-open" src="${event.target.dataset.source}">
`);
  modalWindow.show();

  const largeImage = document.querySelector(".is-open");
  largeImage.addEventListener("click", event => {
    modalWindow.close();
  });

  document.addEventListener("keydown", event => {
    if (event.code !== "Escape") {
      return;
    }
    modalWindow.close();
  });
}
