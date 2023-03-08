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

  document.getElementById('thai-guide-buy').onclick = function() {
    const url = 'https://buy.stripe.com/dR64ha5co7xxclW4gg'
    // const url = 'https://buy.stripe.com/dR64ha5co7xxclW4gg'
    window.open(url, '_self')
    return false
  };
});