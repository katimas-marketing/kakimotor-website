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

//About
const textYourDream = document.getElementById('textYourDream');
const textYourDreamP = document.getElementById('textYourDreamP');
const textVision = document.getElementById('textVision');
const textVisionP = document.getElementById('textVisionP');
const textMission = document.getElementById('textMission');
const textMissionP = document.getElementById('textMissionP');
const textOurFeatures = document.getElementById('textOurFeatures');
const textExtensive = document.getElementById('textExtensive');
const textExtensiveP = document.getElementById('textExtensiveP');
const textFlexible = document.getElementById('textFlexible');
const textFlexibleP = document.getElementById('textFlexibleP');
const textProfessional = document.getElementById('textProfessional');
const textProfessionalP = document.getElementById('textProfessionalP');

// Check the current language preference and update the switch accordingly
if (localStorage.getItem('language') === 'bm') {
  languageToggle.checked = true;
  updateNavbar('bm');
  updateFooter('bm');
  updateAbout('bm');

} else {
  languageToggle.checked = false;
  updateNavbar('en');
  updateFooter('en');
  updateAbout('en');

}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function() {
  if (this.checked) {
    updateNavbar('bm');
    updateFooter('bm');
    updateAbout('bm');

    localStorage.setItem('language', 'bm');
  } else {
    updateNavbar('en');
    updateFooter('en');
    updateAbout('en');

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


function updateAbout(language) {
  if (language === 'bm') {
    textYourDream.textContent = 'Motosikal Impian Anda, Kepakaran Kami';
    textYourDreamP.textContent = 'Kami memahami bahawa membeli sebuah motosikal merupakan pelaburan yang besar, dan kami berkomitmen untuk menjadikan proses ini lancar dan kurang bermasalah. Pasukan kami sentiasa bersedia untuk menjawab sebarang soalan yang ada, dan kami menawarkan pelbagai pilihan ansuran yang fleksibel untuk membantu anda secepat mungkin.';
    textVision.textContent = 'Visi';
    textVisionP.textContent = 'Menjadi kedai motosikal terkemuka yang menyediakan pengalaman pelanggan yang luar biasa dan menawarkan pelbagai jenis motosikal berkualiti tinggi.';
    textMission.textContent = 'Misi';
    textMissionP.textContent = 'Kami berusaha untuk memberikan pengalaman yang baik untuk pelanggan kami sambil mengekalkan tahap profesionalisme, integriti, dan kebolehpercayaan yang tinggi.';
    textOurFeatures.textContent = 'Ciri-Ciri Kami';
    textExtensive.textContent = 'Pilihan Motosikal yang Luas';
    textExtensiveP.textContent = 'Kami mempunyai pelbagai jenis motosikal yang sesuai dengan gaya anda. Hanya beritahu kami motosikal mana yang anda sukai!';
    textFlexible.textContent = 'Pilihan Pembiayaan yang Fleksibel';
    textFlexibleP.textContent = 'Kami memahami bahawa membeli motosikal boleh menjadi tanggungan kewangan yang besar. Oleh itu, kami menawarkan pilihan pembiayaan yang fleksibel untuk anda agar anda dapat memiliki motosikal yang anda inginkan.';
    textProfessional.textContent = 'Perkhidmatan Profesional';
    textProfessionalP.textContent = 'Kami berdedikasi untuk menyediakan pengalaman terbaik kepada pelanggan kami semasa membeli motosikal. Kami berharap dapat membantu anda mencari motosikal yang sempurna untuk keperluan anda dan menyokong anda sepanjang perjalanan anda.';
  } else {
    textYourDream.textContent = 'Your Dream Motorobike, Our Expertise';
    textYourDreamP.textContent = 'We understand that purchasing a motorbike is a significant investment, and we are committed to making the process as smooth and hassle-free as possible. Our team is always available to answer any questions you may have, and we offer flexible installment options to help you get on the road in no time.';
    textVision.textContent = 'Vision';
    textVisionP.textContent = 'To be the leading motorbike shop that provides exceptional customer experience and offers a wide range of high-quality motorbikes.';
    textMission.textContent = 'Mission';
    textMissionP.textContent = 'We strive to deliver a memorable and personalised experience for our customers while maintaining a high level of professionalism, integrity, and reliability.';
    textOurFeatures.textContent = 'Our Features';
    textExtensive.textContent = 'Extensive Motorbike Choices';
    textExtensiveP.textContent = 'We have a wide variety of motorcycles that suit your style. Just tell us which motorbike you like! ';
    textFlexible.textContent = 'Flexible Financing Options';
    textFlexibleP.textContent = 'We understand that buying a motorbike can be a significant financial commitment. Hence, we offer flexible financing options for you so that you can get the motorbike you want';
    textProfessional.textContent = 'Professional Service';
    textProfessionalP.textContent = 'We are dedicated to providing our customers with the best possible experience when shopping for a motorbike. We look forward to helping you find the perfect bike for your needs and supporting you throughout your motorbike journey.';
  }
}

