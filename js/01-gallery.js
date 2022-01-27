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

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  
  const instance = basicLightbox.create(`
      <img
      src="${event.target.dataset.source}"
      alt="${event.target.alt}"
      />
    `);
 instance.show();
 document.addEventListener("click", closeInstance);
}

function closeInstance(event) {
  document.removeEventListener("click", event => {
  instance.close();
  });
}
  
