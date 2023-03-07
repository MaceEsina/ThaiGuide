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
    const url = 'https://buy.stripe.com/test_eVa5mV9wY6uL5447ss'
    // const url = 'https://buy.stripe.com/28o3f04fla4n5Jm3cd'
    window.open(url, '_self')
    return false
  };
});