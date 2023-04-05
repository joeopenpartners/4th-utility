//copy to clipboard

var promoBtn = document.querySelector('.promo-code');

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard');
      promoBtn.classList.add('code-copied');
      promoBtn.innerHTML = `Copied! <svg class="tick-copied" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_44_879)">
      <path d="M18.2108 2.95294C18.0584 3.00763 17.3553 3.69513 13.0936 7.95294L8.1522 12.8904L5.55454 10.2889C3.61704 8.34747 2.91392 7.66778 2.78501 7.60919C2.55454 7.50372 2.22251 7.50763 1.97642 7.6131C1.73813 7.71857 0.683447 8.76544 0.574072 9.00372C0.468603 9.23028 0.456885 9.4881 0.53501 9.73028C0.59751 9.9295 0.773291 10.1131 4.08579 13.4295C6.19517 15.5428 7.62485 16.949 7.7186 16.9998C7.80454 17.0428 7.97251 17.0897 8.09751 17.0975C8.2811 17.117 8.35532 17.1014 8.54673 17.0154C8.75376 16.9217 9.32407 16.3631 14.5272 11.16C18.5975 7.08575 20.3006 5.35919 20.3631 5.23419C20.4881 4.992 20.492 4.57794 20.3709 4.35528C20.2655 4.15997 19.1756 3.07794 18.992 2.9881C18.8045 2.89435 18.4295 2.87872 18.2108 2.95294Z" fill="#03CEA4"/>
      </g>
      <defs>
      <clipPath id="clip0_44_879">
      <rect width="20" height="20" fill="white" transform="translate(0.476562)"/>
      </clipPath>
      </defs>
      </svg>
      `
    })
    .catch(err => {
      console.error('Error copying text: ', err);
    });
}

promoBtn.addEventListener('click', function() {
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


