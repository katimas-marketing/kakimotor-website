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

//Contact
const textLetGetInTouch = document.getElementById('textLetGetInTouch');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone_number');
const subjectInput = document.getElementById('msg_subject');
const messageInput = document.getElementById('message');
const textAccept = document.getElementById('textAccept');
const textTermsCondition = document.getElementById('textTermsCondition');
const textAnd = document.getElementById('textAnd');
const textPrivacyPolicy = document.getElementById('textPrivacyPolicy');
const textSendMessage = document.getElementById('textSendMessage');



// Check the current language preference and update the switch accordingly
if (localStorage.getItem('language') === 'bm') {
  languageToggle.checked = true;
  updateNavbar('bm');
  updateFooter('bm');
  updateContact('bm');
} else {
  languageToggle.checked = false;
  updateNavbar('en');
  updateFooter('en');
  updateContact('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function() {
  if (this.checked) {
    updateNavbar('bm');
    updateFooter('bm');
    updateContact('bm');
    localStorage.setItem('language', 'bm');
  } else {
    updateNavbar('en');
    updateFooter('en');
    updateContact('en');
    localStorage.setItem('language', 'en');
  }
});

function updateNavbar(language) {
  if (language === 'bm') {
    textHome.textContent = 'Laman Utama';
    textAbout.textContent = 'Tentang Kami';
    textHow.textContent = 'Process Membeli Motor';
    textOurBike.textContent = 'Motorsikal Kami';
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
    textHowF.textContent = 'Process Membeli Motor';
    textOurBikeF.textContent = 'Motorsikal Kami';
    textContactUsF.textContent = 'Hubungi Kami';
    textFindUs.textContent = 'Ikuti Kami Di';
    textTC.textContent = 'Terma dan Syarat';
    textPrivacy.textContent = 'Dasar Privasi';
    
  } else {
    textFooterAdd.textContent = 'We are dedicated to providing our customers with the best possible experience when shopping for a motorbike.&nbsp; We look forward to helping you find the perfect bike for your needs and supporting you throughout your motorbike journey';
    textQuickLink.textContent = 'Quick Links';
    textHomeF.textContent = 'Home';
    textAboutF.textContent = 'About Us';
    textHowF.textContent = 'How to buy';
    textOurBikeF.textContent = 'Our Bikes';
    textContactUsF.textContent = 'Contact Us';
    textFindUs.textContent = 'Find Us';
    textTC.textContent = 'Terms and Conditions';
    textPrivacy.textContent = 'Privacy Policy';
    
  }
}

function updateContact(language) {
  if (language === 'bm') {
    textLetGetInTouch.textContent = 'Hubungi Sekarang';
    nameInput.placeholder = 'Nama';
    emailInput.placeholder = 'Emel';
    phoneInput.placeholder = 'No. Telefon';
    subjectInput.placeholder = 'Subjek';
    messageInput.placeholder = 'Mesej';
    textAccept.textContent = 'Terima';
    textTermsCondition.textContent = 'Terma & Syarat';
    textAnd.textContent = 'Serta';
    textPrivacyPolicy.textContent = 'Dasar Privasi.';
    textSendMessage.textContent = 'Hantar mesej';
  } else {
    textLetGetInTouch.textContent = "Let's Get In Touch";
    nameInput.placeholder = 'Name';
    emailInput.placeholder = 'Email';
    phoneInput.placeholder = 'Phone';
    subjectInput.placeholder = 'Subject';
    messageInput.placeholder = 'Message';
    textAccept.textContent = 'Accept';
    textTermsCondition.textContent = 'Terms & Conditions';
    textAnd.textContentr = 'And';
    textPrivacyPolicy.textContent = 'Privacy Policy.';
    textSendMessage.textContent = 'Send Message';
  }
}
