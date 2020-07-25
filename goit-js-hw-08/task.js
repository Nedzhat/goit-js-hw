import gallery from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');
const imgContentRef = document.querySelector('.lightbox__image');
const boxRef = document.querySelector('.lightbox');
const closeModalBtn = document.querySelector(
  'button[data-action="close-lightbox"]',
);
const overlayRef = document.querySelector('.lightbox__content');

gallery.forEach(img => {
  const itemRef = document.createElement('li');
  const linkRef = document.createElement('a');
  const imageEl = document.createElement('img');

  linkRef.setAttribute('href', img.original);
  imageEl.setAttribute('src', img.preview);
  imageEl.setAttribute('alt', img.description);
  imageEl.setAttribute('data-source', img.original);

  itemRef.classList.add('gallery__item');
  linkRef.classList.add('gallery__link');
  imageEl.classList.add('gallery__image');

  linkRef.appendChild(imageEl);
  itemRef.appendChild(linkRef);
  galleryRef.appendChild(itemRef);
});

galleryRef.addEventListener('click', onOpenModal);
closeModalBtn.addEventListener('click', onCloseModal);

function onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  } else {
    boxRef.classList.add('is-open');
    imgContentRef.src = event.target.dataset.source;
    window.addEventListener('keydown', onCloseModalWithEsc);
    overlayRef.addEventListener('click', onCloseModalWithOverlay);
  }
}
function onCloseModal() {
  boxRef.classList.remove('is-open');
  imgContentRef.src = `#`;
  window.removeEventListener('keydown', onCloseModalWithEsc);
  overlayRef.removeEventListener('click', onCloseModalWithOverlay);
}
const onCloseModalWithEsc = () => {
  if (event.code === 'Escape') {
    onCloseModal();
    console.log(`click esc`);
  }
};
const onCloseModalWithOverlay = () => {
  if (event.target === event.currentTarget) {
    onCloseModal();
    console.log(`click overlay`);
  }
};
