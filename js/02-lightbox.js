import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector("body .gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => 
 `<a class="gallery__item" href='${original}'>
      <img
        class="gallery__image"
        src='${preview}'
        alt='${description}'
      />
  </a>`
).join("");}

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector:'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});


