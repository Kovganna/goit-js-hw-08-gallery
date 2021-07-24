import {galleryItems} from './app.js';

// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

const createGalleryList = document.querySelector('.js-gallery')
const createModalImg = document.querySelector('.js-lightbox')
const lightboxImage = document.querySelector('.lightbox__image')
const closeBtn = document.querySelector('[data-action="close-lightbox"]')

//создание разметки галлереи
const addGalleryEl = galleryItems.map(el => {

    const addGalleryItem = 
    `<li class="gallery__item">
  <a
    class="gallery__link"
    href= ${el.original}
  >
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</li>`

return addGalleryItem;
})
createGalleryList.insertAdjacentHTML("beforeend", addGalleryEl.join(''))

createGalleryList.addEventListener('click', onImageClick)

function onImageClick(event) {
if(event.target.nodeName !== 'IMG') {
    return
}
 else if(event.target.nodeName === 'IMG') {
     event.preventDefault()
createModalImg.classList.add('is-open')// добавление класса в div
lightboxImage.src = event.target.getAttribute('data-source')// получение url большого изображения.
lightboxImage.alt = event.target.alt
console.log(event.target.nodeName)
}

window.addEventListener("keydown", keyEscape)



function closeModalWindow() {
    createModalImg.classList.remove('is-open')
    lightboxImage.src =""
    lightboxImage.alt =""

    window.removeEventListener("keydown", keyEscape)
 }

function lightboxImage(event) {
    if(event.target === event.currentTarget) {
        closeModalWindow()
    }
}

function keyEscape(event) {
    if(event.code === "Escape") {
        closeModalWindow()
    }
}

