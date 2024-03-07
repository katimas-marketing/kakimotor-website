// Get the language toggle checkbox and the text elements
// Navbar
const languageToggle = document.getElementById('language-toggle');
const textHome = document.getElementById('textHome');
const textAbout = document.getElementById('textAbout');
const textHow = document.getElementById('textHow');
const textOurBike = document.getElementById('textOurBike');
const textContactUs = document.getElementById('textContactUs');

// Footer 
const textFooterAdd = document.getElementById('textFooterAdd');
const textQuickLink = document.getElementById('textQuickLink');
const textHomeF = document.getElementById('textHomeF');
const textAboutF = document.getElementById('textAboutF');
const textHowF = document.getElementById('textHowF');
const textOurBikeF = document.getElementById('textOurBikeF');
const textContactUsF = document.getElementById('textContactUsF');
const textFindUs = document.getElementById('textFindUs');
const textTC = document.getElementById('textTC');
const textPrivacy = document.getElementById('textPrivacy');

// Check the current language preference and update the switch accordingly
if (localStorage.getItem('language') === 'bm') {
  languageToggle.checked = true;
  updateNavbar('bm');
  updateFooter('bm');
 
} else {
  languageToggle.checked = false;
  updateNavbar('en');
  updateFooter('en');
 
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function() {
  if (this.checked) {
    updateNavbar('bm');
    updateFooter('bm');
  
    localStorage.setItem('language', 'bm');
  } else {
    updateNavbar('en');
    updateFooter('en');
  
    localStorage.setItem('language', 'en');
  }
});

function updateNavbar(language) {
  if (language === 'bm') {
    textHome.textContent = 'Laman Utama';
    textAbout.textContent = 'Tentang Kami';
    textHow.textContent = 'Cara Beli';
    textOurBike.textContent = 'Motosikal Kami';
    textContactUs.textContent = 'Hubungi Kami';
  } else {
    textHome.textContent = 'Home';
    textAbout.textContent = 'About Us';
    textHow.textContent = 'How to buy';
    textOurBike.textContent = 'Our Bikes';
    textContactUs.textContent = 'Contact Us';
  }
}

function updateFooter(language) {
  if (language === 'bm') {
    textFooterAdd.textContent = 'Kami berdedikasi untuk menyediakan pengalaman terbaik kepada pelanggan kami ketika membeli motosikal. Kami berharap dapat membantu anda mencari motosikal yang sempurna untuk keperluan anda dan menyokong anda sepanjang perjalanan motosikal anda.';
    textQuickLink.textContent = 'Pautan Pantas';
    textHomeF.textContent = 'Laman Utama';
    textAboutF.textContent = 'Tentang Kami';
    textHowF.textContent = 'Cara Beli';
    textOurBikeF.textContent = 'Motosikal Kami';
    textContactUsF.textContent = 'Hubungi Kami';
    textFindUs.textContent = 'Ikuti Kami Di';
    textTC.textContent = 'Terma dan Syarat';
    textPrivacy.textContent = 'Dasar Privasi';
    
  } else {
    textFooterAdd.textContent = 'We are dedicated to providing our customers with the best possible experience when shopping for a motorbike. We look forward to helping you find the perfect bike for your needs and supporting you throughout your motorbike journey';
    textQuickLink.textContent = 'Quick Links';
    textHomeF.textContent = 'Home';
    textAboutF.textContent = 'About Us';
    textHowF.textContent = 'How to buy';
    textOurBikeF.textContent = 'Our Bikes';
    textContactUsF.textContent = 'Contact Us';
    textFindUs.textContent = 'Find Us';
    // textTC.textContent = 'Terms and Conditions';
    textPrivacy.textContent = 'Privacy Policy';
  }
}


