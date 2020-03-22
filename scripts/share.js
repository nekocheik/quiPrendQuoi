(()=> {
  const $button = document.querySelector('.share__button')
  if($button) {
    if(navigator.share) {
      navigator.share({
        title: document.title,
        text: 'Hello World',
        url: window.location.href,
      });
    } else {
      $button.style.display = "none"
    }
  }
})()
