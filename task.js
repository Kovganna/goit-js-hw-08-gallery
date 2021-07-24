import {galleryItems} from './app.js';

// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

const createGalleryList = document.querySelector('.js-gallery')

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

// делегиерование
createGalleryList.addEventListener('click', onImageClick)
function onImageClick(event) {
if(event.target.nodeName !== 'IMG') {
    return
}

    console.log(event.target.nodeName);
}

// получение url большого изображения.
//  window.location


const createModalImg = document.querySelector('.js-lightbox')
// добавление класса в div
// createModalImg.classList.add('is-open')
 
