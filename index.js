

// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
  
const ref = {
  imgGallery: document.querySelector('.js-gallery'),
  lightboxContent: document.querySelector('.lightbox__content'),
  lightboxImage: document.querySelector('.lightbox__image'),
  modalElement: document.querySelector('.js-lightbox'),
  closeModalBtn: document.querySelector('button[data-action = "close-lightbox"]'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
};

 
function addImgGallery(galleryItems) {
  return galleryItems
  .map(elem => {
  return  `<li class="gallery__item">
  <a
    class="gallery__link"
    href= ${elem.original}
  >
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"
    />
  </a>
</li>`;
})
.join('')
};

const listItem = addImgGallery(galleryItems);
ref.imgGallery.insertAdjacentHTML("beforeend", listItem);

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// ref.galleryList.addEventListener("click", onClick);

function onGalleryClick(evt) {
  const onImageClick = evt.target.classlist.contains("gallery__image");
  if (onImageClick) {
    evt.preventDefault();
    ref.modalElement.classList.add('is-open');
    ref.lightboxImage.src = evt.target.getAttribute("data-source");
    ref.lightboxImage.alt = evt.target.alt;
    console.log(lightboxImage);
  }
  else {
    return
  }
  window.removeEventListener("keyup", keyEscapes);
  
};

// ref.lightboxImage.src="";
//     ref.lightboxImage.alt="";
//     window.removeEventListener("keyup", keyEsc); 

// Открытие модального окна по клику на элементе галереи.
// function openModalFn(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return
//   }
// }
// const imageRef = e.target;
// const originalImgUrl = imageRef.dataset.source;
// console.log(originalImgUrl)


// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".