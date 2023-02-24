document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('#image-row > div')
  const image = document.getElementById('image1')

  const onElemClick = (elem, inx) => {
    images.forEach(item => {
      if (elem !== item) item.classList.remove('active')
      elem.classList.add('active')
      image.className = 'image' + inx
    })
    
  }

  images.forEach((elem, inx) => {
    elem.addEventListener('click', () => onElemClick(elem, inx + 1))
  })
});