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

// Service
const changeImage = document.getElementById('changeImage');

//Apply Now
const ApplyNowWithUs = document.getElementById('ApplyNowWithUs');
const ApplyingDreamMotorcycle = document.getElementById('ApplyingDreamMotorcycle');
const MotorcycleBrand = document.getElementById('MotorcycleBrand');
const MotorcycleModel = document.getElementById('MotorcycleModel');
const NameAs = document.getElementById('NameAs');
const Mobile = document.getElementById('Mobile');
const Email = document.getElementById('Email');
const SendBtn = document.getElementById('SendBtn');



// Check the current language preference and update the switch accordingly
if (localStorage.getItem('language') === 'bm') {
  languageToggle.checked = true;
  updateNavbar('bm');
  updateFooter('bm');
  updateApplyNow('bm');
  // changeImageLanguage('bm');

} else {
  languageToggle.checked = false;
  updateNavbar('en');
  updateFooter('en');
  updateApplyNow('en');
  // changeImageLanguage('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function() {
  if (this.checked) {
    updateNavbar('bm');
    updateFooter('bm');
    updateApplyNow('bm');
    // changeImageLanguage('bm');

    localStorage.setItem('language', 'bm');
  } else {
    updateNavbar('en');
    updateFooter('en');
    updateApplyNow('en');
    // changeImageLanguage('en');
    localStorage.setItem('language', 'en');
  }
});

function updateNavbar(language) {
  if (language === 'bm') {
    textHome.textContent = 'Laman Utama';
    textAbout.textContent = 'Tentang Kami';
    textHow.textContent = 'Process Membeli Motor';
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

function updateApplyNow(language) {
  if (language === 'bm') {
    ApplyNowWithUs.textContent = 'Mohon Sekarang dengan Kami';
    ApplyingDreamMotorcycle.textContent = 'Memohon untuk motosikal idaman anda begitu mudah, hanya isi borang permohonan ini dan hantar! Pasukan pakar kami akan menyemak permohonan anda dengan segera dan anda akan menerima jawapan dalam masa yang singkat';
    MotorcycleBrand.textContent = 'Jenama Motosikal:';
    MotorcycleModel.textContent = 'Model Motosikal:';
    NameAs.textContent = 'Nama seperti Dalam NRIC:'
    Mobile.textContent = 'Nombor telefon:';
    Email.textContent = 'Emel:';
    SendBtn.textContent = 'Hantar';
  } else {
    ApplyNowWithUs.textContent = 'Apply Now with Us';
    ApplyingDreamMotorcycle.textContent = "Applying for your dream motorcycle is so easy, just fill out our online application form and submit! Our team of experts will review your application promptly, and you'll receive a response in no time.";
    MotorcycleBrand.textContent = 'Motorcycle Brand:';
    MotorcycleModel.textContent = 'Motorcycle Model:';
    NameAs.textContent = 'Name as In NRIC: '
    Mobile.textContent = 'Mobile Contact No.:';
    Email.textContent = 'Email:';
    SendBtn.textContent = 'Send';
  }
}

function updateFooter(language) {
  if (language === 'bm') {
    textFooterAdd.textContent = 'Kami berdedikasi untuk menyediakan pengalaman terbaik kepada pelanggan kami ketika membeli motosikal. Kami berharap dapat membantu anda mencari motosikal yang sempurna untuk keperluan anda dan menyokong anda sepanjang perjalanan motosikal anda.';
    textQuickLink.textContent = 'Pautan Pantas';
    textHomeF.textContent = 'Laman Utama';
    textAboutF.textContent = 'Tentang Kami';
    textHowF.textContent = 'Process Membeli Motor';
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


// function changeImageLanguage(language) {
//   if (language === 'bm') {
//     changeImage.src = 'assets/img/how_bm.jpg?' + Date.now();
//     console.log('test', changeImage)
//   } else {
//     changeImage.src = 'assets/img/how_en.jpg';
//     console.log('test', changeImage)
//   }

  
// }



