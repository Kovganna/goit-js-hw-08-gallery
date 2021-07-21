import {galleryItems} from './app.js';

// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
  

const galleryList = document.querySelector('.js-gallery');
const lilghtbox = document.querySelector('.js-lightbox');



const addGalleryList = galleryItems.map(item => {
  const addGalleryItem =
  `<li class="gallery__item">
  <a
    class="gallery__link"
    href= ${item.original}
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`

  return addGalleryItem
})
galleryList.insertAdjacentHTML("beforeend", addGalleryList.join(''))

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

// let selectedGalleryItem
// gallery__item.onclick = event => {
//     let target = event.target

//     if (target.class != '.gallery__item')
// };

// Открытие модального окна по клику на элементе галереи.

// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".