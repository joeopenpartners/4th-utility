//copy to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch(err => {
      console.error('Error copying text: ', err);
    });
}

document.querySelector('.promo-code').addEventListener('click', function() {
  console.log('clicked');
  var copyText = this.getAttribute('data-copy-text');
  copyToClipboard(copyText);
});




// const animatedImg = document.querySelector('.animated-open');

// animatedImg.addEventListener('mouseenter', () => {
//   animatedImg.src = 'https://the4thutility.co.uk/img/icons/animated/Save_White.gif';
// });

// animatedImg.addEventListener('mouseleave', () => {
//   animatedImg.src = 'https://the4thutility.co.uk/img/icons/animated/Save_White.gif';
// });


