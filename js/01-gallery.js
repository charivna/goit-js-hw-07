import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageContainer = document.querySelector('.gallery')
const imageMarkup = createImageMarkup(galleryItems)

imageContainer.addEventListener('click', onImageContainerClick)

function onImageContainerClick(event) {
   const isGallaryImageEl = event.target.classList.contains('gallery__image')
    if (!isGallaryImageEl) {
        return
    }
    event.preventDefault()
console.log(isGallaryImageEl);
    const imageSource = event.target.dataset.source;
    const currentItem = event.target
    
    const instance = basicLightbox.create(`<div> <a href="">
    <img src= "${currentItem.src}" data-source="${imageSource}" alt="${currentItem.alt}"
    /> </a>
</div>`)
    instance.show()
}

function createImageMarkup(images) {
return images.map(({preview, original, description}) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src= "${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
   
    }).join('')
}
imageContainer.insertAdjacentHTML('beforeend',imageMarkup )



