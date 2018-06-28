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
    });
  });
}