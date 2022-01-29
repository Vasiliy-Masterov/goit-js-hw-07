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
  ).join("");
}

 function showLargeImage(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
  return;
  }

  const largeImage = basicLightbox.create(`
      <img
      src="${event.target.dataset.source}"
      alt="${event.target.alt}"
      />
    `,
    {
    onShow: (instance) => {
        instance.element().querySelector('img').addEventListener("click", () => {
         instance.close();
        });
        document.addEventListener("keydown", event => {
          if (event.code !== "Escape") {
            return;    
          }
          instance.close();
        });
    },
    onClose: (instance) => {
        instance.element().querySelector('img').removeEventListener("click",() => {});
        document.removeEventListener("keydown", () => {});
      }
    });
 largeImage.show();
}


