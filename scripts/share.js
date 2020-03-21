(()=> {
  const $button = document.querySelector('.share__button')
  if(navigator.share) {
    
  } else {
    $button.style.display = "none"
  }
})()
