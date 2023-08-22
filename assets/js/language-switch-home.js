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

// Index Pages
const textDreamMoto = document.getElementById('textDreamMoto');
const dreamMotoParagraph = document.getElementById('dreamMotoParagraph');
const textKnowMore = document.getElementById('textKnowMore');
const textLocation = document.getElementById('textLocation');
const textCallUs = document.getElementById('textCallUs');
const textOpeningHours = document.getElementById('textOpeningHours');
const textMonFri = document.getElementById('textMonFri');
const textSatSun = document.getElementById('textSatSun');
const textOurServices = document.getElementById('textOurServices');
const textYourNeeds = document.getElementById('textYourNeeds');
const textSalesService = document.getElementById('textSalesService');
const textSalesServiceP = document.getElementById('textSalesServiceP');
const textFinancing = document.getElementById('textFinancing');
const textFinancingP = document.getElementById('textFinancingP');
const textInsurance = document.getElementById('textInsurance');
const textInsuranceP = document.getElementById('textInsuranceP');
const textDeals = document.getElementById('textDeals');
const textDealsP = document.getElementById('textDealsP');
const textGetItNow = document.getElementById('textGetItNow');
const textOurShop = document.getElementById('textOurShop');
const textTakeTour = document.getElementById('textTakeTour');
const textOurBikes = document.getElementById('textOurBikes');
const textOurBikesP = document.getElementById('textOurBikesP');
const textSeeMore = document.getElementById('textSeeMore');

// Check the current language preference and update the switch accordingly
if (localStorage.getItem('language') === 'bm') {
  languageToggle.checked = true;
  updateNavbar('bm');
  updateFooter('bm');
  updateIndex('bm');
} else {
  languageToggle.checked = false;
  updateNavbar('en');
  updateFooter('en');
  updateIndex('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function() {
  if (this.checked) {
    updateNavbar('bm');
    updateFooter('bm');
    updateIndex('bm');
    localStorage.setItem('language', 'bm');
  } else {
    updateNavbar('en');
    updateFooter('en');
    updateIndex('en');
    localStorage.setItem('language', 'en');
  }
});

function updateNavbar(language) {
  if (language === 'bm') {
    textHome.textContent = 'Laman Utama';
    textAbout.textContent = 'Tentang Kami';
    textHow.textContent = 'Proses Membeli Motor';
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
    textHowF.textContent = 'Proses Membeli Motor';
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
    textTC.textContent = 'Terms and Conditions';
    textPrivacy.textContent = 'Privacy Policy';
    
  }
}


function updateIndex(language) {
  if (language === 'bm') {
    textDreamMoto.textContent = 'Miliki Motosikal Impian Anda';
    dreamMotoParagraph.textContent = 'Sebagai pengedar motosikal Yamaha dan Honda, kami adalah peminat motosikal yang bersemangat untuk memberikan anda pengalaman membeli-belah motosikal terbaik';
    textKnowMore.textContent = 'Ketahui Lebih Lanjut';
    textLocation.textContent = 'Lokasi';
    textCallUs.textContent = 'Hubungi Kami';
    textOpeningHours.textContent = 'Waktu Operasi';
    textMonFri.textContent = 'Isnin hingga Jumaat';
    textSatSun.textContent = 'Sabtu hingga Ahad';
    textOurServices.textContent = 'Perkhidmatan Kami';
    textYourNeeds.textContent = 'Keperluan Anda Adalah Keutamaan Kami';
    textSalesService.textContent = 'Perkhidmatan Jualan';
    textSalesServiceP.textContent = 'Perkhidmatan jualan motosikal kami memberikan bantuan dalam mencari motosikal yang ideal untuk anda. Beritahu kami apa yang anda sedang cari, dan kami akan membantu anda sedaya upaya.';
    textFinancing.textContent = 'Perkhidmatan Pembiayaan';
    textFinancingP.textContent = 'Kelulusan cepat. Kadar bulanan yang menarik. Pilihan ansuran yang fleksibel. Kaedah pembayaran yang mudah dan cepat.';
    textInsurance.textContent = 'Perkhidmatan Pembaharuan Insurans dan Cukai Jalan';
    textInsuranceP.textContent = 'Pembaharuan Cukai Jalan dan Insurans motosikal boleh dilakukan dalam satu Langkah: Mudah, cepat, dan selamat. Dapatkan Quotation dengan segera!';
    textDeals.textContent = 'Promosi istimewa untuk Food Rider';
    textDealsP.textContent = 'Menjayakan perniagaan penghantaran makanan anda dengan pelan pembayaran fleksibel kami! Serendah RM128 sebulan.';
    textGetItNow.textContent = 'Dapatkan Sekarang';
    textOurShop.textContent = 'KEDAI KAMI';
    textTakeTour.textContent = 'Kunjungi Kedai Kami';
    textOurBikes.textContent = 'Motosikal Kami';
    textOurBikesP.textContent = 'Pilih Daripada Pelbagai Jenis Motosikal Yang Sedia Ada';
    textSeeMore.textContent = 'Banyak Lagi';
  } else {
    textDreamMoto.textContent = 'Own your dream motorbike';
    dreamMotoParagraph.textContent = 'As an authorised dealer of Yamaha and Honda underbone motorcycles, we are a team of motor enthusiasts passionate in providing you with the best motor shopping experience.';
    textKnowMore.textContent = 'Know More';
    textLocation.textContent = 'Location';
    textCallUs.textContent = 'Call Us';
    textOpeningHours.textContent = 'Opening Hours';
    textMonFri.textContent = 'Monday to Friday';
    textSatSun.textContent = 'Saturday and Sunday';
    textOurServices.textContent = 'our services';
    textYourNeeds.textContent = 'Your Needs Are Our Priority';
    textSalesService.textContent = 'Sales Service';
    textSalesServiceP.textContent = "Our motorbike sales service offers assistance in finding the ideal motorcycle for you. Let us know what you're looking for, and we'll assist you in finding the solution.";
    textFinancing.textContent = 'Financing Services';
    textFinancingP.textContent = 'Fast approval. Attractive monthly rates. Flexible instalment options. Hassle-free repayment methods.';
    textInsurance.textContent = 'Insurance and Road Tax Renewal Services';
    textInsuranceP.textContent = 'Renewal of Motorcycle Road Tax and Insurance can be done in a single step. Simple,quick, and secure. Get a quote right away!';
    textDeals.textContent = 'Deals for Riders';
    textDealsP.textContent = 'Get your food delivery business rolling with our flexible payment plans! As low as RM128 per month.';
    textGetItNow.textContent = 'Get it Now';
    textOurShop.textContent = 'OUR shop';
    textTakeTour.textContent = 'Take a Tour';
    textOurBikes.textContent = 'our bikes';
    textOurBikesP.textContent = 'Choose From Our Wide Variety of Motorbikes';
    textSeeMore.textContent = 'See More';
  }
}
