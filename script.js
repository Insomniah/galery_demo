const previewContainer = document.querySelector('.preview-container');

for (let i = 0; i < urls.length; i++) {
  const newPictureBlock = document.createElement('div');
  const newPicture = newPictureBlock.appendChild(document.createElement('img'));
  newPictureBlock.classList.add('preview-container_elem');
  newPicture.src = `./img/${urls[i]}`;
  previewContainer.append(newPictureBlock);
}

const mainPicture = document.querySelector('.image-container img');
const allPictures = document.querySelectorAll('.preview-container_elem img');


allPictures.forEach(el => el.addEventListener('click', selectPicture));

function selectPicture() {
  mainPicture.attributes.src.value = this.attributes.src.value;
}