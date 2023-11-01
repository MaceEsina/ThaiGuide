document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('#image-row > div')
  const image = document.getElementById('image1')
  const downloadBtn = document.getElementById('download-btn')
  const thailandBuy = document.getElementById('thai-guide-buy')
  const bangkokBuy = document.getElementById('bangkok-guide-buy')

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

  if (thailandBuy) {
    thailandBuy.onclick = function() {
      const url = 'https://buy.stripe.com/7sI00U48k9FF5XyaEG'
      window.open(url, '_self')
      return false
    };
  }

  if (bangkokBuy) {
    bangkokBuy.onclick = function() {
      // TODO change url 
      const url = 'https://buy.stripe.com/7sI00U48k9FF5XyaEG'
      window.open(url, '_self')
      return false
    };
  }

  if (downloadBtn) {
    downloadBtn.onclick = function() {
      const urlParams = new URLSearchParams(window.location.search)
      const fileName = urlParams.get('file_name')
      const link = document.createElement('a')

      link.setAttribute('download', fileName)
      link.href = `./assets/${fileName}.pdf`
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    };
  }
});