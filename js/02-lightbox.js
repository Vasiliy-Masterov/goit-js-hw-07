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

/*

<a class="gallery__item" href="large-image.jpg">
    <img
        class="gallery__image"
        src="small-image.jpg"
        alt="Image description" />
</a>

*/