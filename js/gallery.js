// Activates the image gallery
// The main task is to attach an event listener to each image in the gallery
// and then respond appropriately to a click on an image

function activateGallery() {
  let thumbnails = document.querySelectorAll('#gallery-thumbs > div > img');
  let mainImage = document.querySelector('#gallery-photo img');
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
      // Set clicked thumbnail as new main image
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute('src', newImageSrc);

      // Change which thumbnail is highlighted as the current one
      document.querySelector('.current').classList.remove('current');
      thumbnail.parentNode.classList.add('current');

      // Update the image information that displays with the image
      let galleryInfo = document.querySelector('#gallery-info');
      let title = galleryInfo.querySelector('.title');
      let description = galleryInfo.querySelector('.description');
      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}