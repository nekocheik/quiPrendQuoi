


(()=>{ 
  const $button = document.querySelector('.copy__button')
  const $clipboardEl = document.querySelector('.clipboard__el')
  if ($clipboardEl && $button) {
  
    if ( $clipboardEl.value !== window.location.href) {
      $clipboardEl.value = window.location.href;
    }
    console.log($clipboardEl ,$button)
  
    if (navigator.clipboard) {
      console.log("Support du presse papier")
      $button.addEventListener( 'click', ()=> {
        navigator.clipboard
        .writeText($clipboardEl.getAttribute('data-clipboard'))
        .then(() => {
          console.log('Copié !');
          $button.innerHTML = 'Copié !';
          setTimeout(() => ($button.innerHTML = 'Copier'), 2000);
        })
        .catch((err) => console.warn(err));
      });
    } else {
      console.warn("Pas de support");
      $button.style.display = "none"
    }
  }
})();
