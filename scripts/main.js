


(()=>{ 
  const $button = document.querySelector('.copy__button')
  const $clipboardEl = document.querySelector('.clipboard__el')
  if (navigator.clipboard) {
    console.log("Support du presse papier")
  } else {
    console.warn("Pas de support")
  }

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
})();
