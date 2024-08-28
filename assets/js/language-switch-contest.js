// Default Language
if (!localStorage.getItem('language')) {
  localStorage.setItem('language', 'bm');
}

// Language Toggle Button
const languageToggle = document.getElementById('language-toggle');

// Contest
const ContestTitle = document.getElementById('textContestTitle');
const ContestDate = document.getElementById('textContestDate');
const ContestFormTitle = document.getElementById('textContestFormTitle');
const ContestFormNameAsIc = document.getElementById('NameLabel');
const ContestFormIcNo = document.getElementById('IcNoLabel');
const ContestFormPhone = document.getElementById('MobileLabel');
const ContestFormEmail = document.getElementById('EmailLabel');
const ContestFormLocation = document.getElementById('LocationLabel');
const ContestFormTikTokUsername = document.getElementById('TikTokUsernameLabel');
const ContestFormVideoLink = document.getElementById('videoLinkLabel');
const ContestFormTnC1 = document.getElementById('tncLabel1');
const ContestFormTnC2 = document.getElementById('tncLabel2');
const ContestFormSubmitBtn = document.getElementById('SendBtn');
const ContestFormNote = document.getElementById('contestNote');
const NavbarContest = document.getElementById('contestNavLabel');
const NavbarContestJoin = document.getElementById('contestJoinNavLabel');
const ContestSuccessMessage = document.getElementById('success-message');

// Check the current language preference and update the switch accordingly
if (localStorage.getItem('language') === 'bm') {
  languageToggle.checked = true;

  updateContest('bm');
  // updateNavbar('bm');
  // updateFooter('bm');
  // changeImageLanguage('bm');

} else {
  languageToggle.checked = false;
  updateContest('en');

  // updateNavbar('en');
  // updateFooter('en');
  // changeImageLanguage('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function() {
  if (this.checked) {
    // updateNavbar('bm');
    // updateFooter('bm');
    // changeImageLanguage('bm');

    updateContest('bm');
    localStorage.setItem('language', 'bm');
  } else {
    // updateNavbar('en');
    // updateFooter('en');
    // changeImageLanguage('en');

    updateContest('en');
    localStorage.setItem('language', 'en');
  }
});

function updateContest(language) {
  if (language === 'bm') {
    ContestTitle.textContent = 'Sertailah Pertandingan Impian Malaysia';
    ContestDate.textContent = 'Tarikh: 1 Sept - 14 Sept 2024';
    ContestFormTitle.textContent = 'Daftar';
    ContestFormNameAsIc.textContent = 'Nama Penuh (ikut NRIC):';
    ContestFormIcNo.textContent = 'No. IC:';
    ContestFormPhone.textContent = 'No. Telefon:';
    ContestFormEmail.textContent = 'Emel:';
    ContestFormLocation.textContent = 'Pilih Lokasi:';
    ContestFormTikTokUsername.textContent = 'Nama Pengguna TikTok:';
    ContestFormVideoLink.textContent = 'Link Video:';
    ContestFormTnC1.textContent = 'Saya setuju dengan semua pernyataan dalam ';
    ContestFormTnC2.textContent = 'Terma dan Syarat';
    ContestFormTnC1.style.fontSize = '12px';
    ContestFormTnC2.style.fontSize = '12px';
    ContestFormSubmitBtn.textContent = 'Daftar';
    ContestFormNote.textContent = '*Nota: Sila WhatsApp kami di 014-6243375 jika anda menghadapi sebarang masalah semasa pendaftaran.';
    NavbarContest.textContent = 'Pertandingan Impian Malaysia';
    NavbarContestJoin.textContent = 'Sertai';
    ContestSuccessMessage.textContent = "Terima kasih kerana mendaftar! Sila semak emel anda untuk pengesahan video. Sila hubungi kami jika anda tidak menerima sebarang emel dalam masa 10 minit.";
  } else {
    ContestTitle.textContent = 'Join the Impian Malaysia Contest';
    ContestDate.textContent = 'Date: 1 Sept - 14 Sept 2024';
    ContestFormTitle.textContent = 'Sign up';
    ContestFormNameAsIc.textContent = 'Full Name (as in NRIC):';
    ContestFormIcNo.textContent = 'IC No:';
    ContestFormPhone.textContent = 'Phone No:';
    ContestFormEmail.textContent = 'Email:';
    ContestFormLocation.textContent = 'Location:';
    ContestFormTikTokUsername.textContent = 'TikTok Username:';
    ContestFormVideoLink.textContent = 'Video Link:';
    ContestFormTnC1.textContent = 'I agree all statements in ';
    ContestFormTnC2.textContent = 'Terms and Conditions';
    ContestFormTnC1.style.fontSize = '12px';
    ContestFormTnC2.style.fontSize = '12px';
    ContestFormSubmitBtn.textContent = 'Register';
    ContestFormNote.textContent = '*Note: Please whatsapp us on 014-6243375 if you face any issue during register.';
    NavbarContest.textContent = 'Impian Malaysia Contest';
    NavbarContestJoin.textContent = 'Join';
    ContestSuccessMessage.textContent = "Thanks for register! Please check your email for video verification. Please contact us if you didn't receive any email within 10 minutes.";
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


// function updateNavbar(language) {
//   if (language === 'bm') {
//     textHome.textContent = 'Laman Utama';
//     textAbout.textContent = 'Tentang Kami';
//     textHow.textContent = 'Process Membeli Motor';
//     textOurBike.textContent = 'Motosikal Kami';
//     textContactUs.textContent = 'Hubungi Kami';
//   } else {
//     textHome.textContent = 'Home';
//     textAbout.textContent = 'About Us';
//     textHow.textContent = 'How to buy';
//     textOurBike.textContent = 'Our Bikes';
//     textContactUs.textContent = 'Contact Us';
//   }
// }

// function updateApplyNow(language) {
//   if (language === 'bm') {
//     ApplyNowWithUs.textContent = 'Mohon Sekarang dengan Kami';
//     ApplyingDreamMotorcycle.textContent = 'Memohon untuk motosikal idaman anda begitu mudah, hanya isi borang permohonan ini dan hantar! Pasukan pakar kami akan menyemak permohonan anda dengan segera dan anda akan menerima jawapan dalam masa yang singkat';
//     MotorcycleBrand.textContent = 'Jenama Motosikal:';
//     MotorcycleModel.textContent = 'Model Motosikal:';
//     NameAs.textContent = 'Nama seperti Dalam NRIC:'
//     Mobile.textContent = 'Nombor telefon:';
//     Email.textContent = 'Emel:';
//     SendBtn.textContent = 'Hantar';
//   } else {
//     ApplyNowWithUs.textContent = 'Apply Now with Us';
//     ApplyingDreamMotorcycle.textContent = "Applying for your dream motorcycle is so easy, just fill out our online application form and submit! Our team of experts will review your application promptly, and you'll receive a response in no time.";
//     MotorcycleBrand.textContent = 'Motorcycle Brand:';
//     MotorcycleModel.textContent = 'Motorcycle Model:';
//     NameAs.textContent = 'Name as In NRIC: '
//     Mobile.textContent = 'Mobile Contact No.:';
//     Email.textContent = 'Email:';
//     SendBtn.textContent = 'Send';
//   }
// }

// function updateFooter(language) {
//   if (language === 'bm') {
//     textFooterAdd.textContent = 'Kami berdedikasi untuk menyediakan pengalaman terbaik kepada pelanggan kami ketika membeli motosikal. Kami berharap dapat membantu anda mencari motosikal yang sempurna untuk keperluan anda dan menyokong anda sepanjang perjalanan motosikal anda.';
//     textQuickLink.textContent = 'Pautan Pantas';
//     textHomeF.textContent = 'Laman Utama';
//     textAboutF.textContent = 'Tentang Kami';
//     textHowF.textContent = 'Process Membeli Motor';
//     textOurBikeF.textContent = 'Motosikal Kami';
//     textContactUsF.textContent = 'Hubungi Kami';
//     textFindUs.textContent = 'Ikuti Kami Di';
//     textTC.textContent = 'Terma dan Syarat';
//     textPrivacy.textContent = 'Dasar Privasi';
    
//   } else {
//     textFooterAdd.textContent = 'We are dedicated to providing our customers with the best possible experience when shopping for a motorbike. We look forward to helping you find the perfect bike for your needs and supporting you throughout your motorbike journey';
//     textQuickLink.textContent = 'Quick Links';
//     textHomeF.textContent = 'Home';
//     textAboutF.textContent = 'About Us';
//     textHowF.textContent = 'How to buy';
//     textOurBikeF.textContent = 'Our Bikes';
//     textContactUsF.textContent = 'Contact Us';
//     textFindUs.textContent = 'Find Us';
//     // textTC.textContent = 'Terms and Conditions';
//     textPrivacy.textContent = 'Privacy Policy';
    
//   }
// }






