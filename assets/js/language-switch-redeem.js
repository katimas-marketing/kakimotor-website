// Default Language
if (!localStorage.getItem('language')) {
  localStorage.setItem('language', 'bm');
}

// Language Toggle Button
const languageToggle = document.getElementById('language-toggle');

// Redeem
// const RedeemTitle = document.getElementById('textRedeemTitle');
const RedeemTitle1 = document.getElementById('textRedeemTitle1');
const RedeemTitle2 = document.getElementById('textRedeemTitle2');
const RedeemDate = document.getElementById('textRedeemDate');
const RedeemFormTitle = document.getElementById('textLetGetInTouch');
const RedeemFormNameAsIc = document.getElementById('name');
const RedeemFormIcNo = document.getElementById('icno');
const RedeemFormPhone = document.getElementById('phone');
const RedeemFormEmail = document.getElementById('email');
const RedeemFormReferralCode = document.getElementById('refcode');
const RedeemFormSubmitBtn = document.getElementById('SendBtnRedeem');
const NavbarContest = document.getElementById('contestNavLabel');
const NavbarContestJoin = document.getElementById('contestJoinNavLabel');

// Check the current language preference and update the switch accordingly
if (localStorage.getItem('language') === 'bm') {
  languageToggle.checked = true;
  updateRedeem('bm');
} else {
  languageToggle.checked = false;
  updateRedeem('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function() {
  if (this.checked) {
    updateRedeem('bm');
    localStorage.setItem('language', 'bm');
  } else {
    updateRedeem('en');
    localStorage.setItem('language', 'en');
  }
});

function updateRedeem(language) {
  if (language === 'bm') {
    RedeemTitle1.textContent = 'Tebus Sekarang';
    RedeemTitle2.textContent = 'Sebelum Terlambat';
    RedeemDate.textContent = 'Tarikh: 15 Sept - 30 Nov 2024';
    RedeemFormTitle.textContent = 'Tebus Kod Anda Di Sini!';
    RedeemFormNameAsIc.placeholder = 'Nama seperti dalam IC';
    RedeemFormIcNo.placeholder = 'No IC. Contoh: 900123131234';
    RedeemFormPhone.placeholder = 'Sila masukkan nombor anda';
    RedeemFormEmail.placeholder = 'Sila masukkan emel anda';
    RedeemFormReferralCode.placeholder = 'Sila masukkan kod rujukan yang sah';
    RedeemFormSubmitBtn.textContent = 'Hantar';
    NavbarContest.textContent = 'Pertandingan Impian Malaysia';
    NavbarContestJoin.textContent = 'Sertai';
  } else {
    RedeemTitle1.textContent = 'Redeem Now';
    RedeemTitle2.textContent = "Before It's Too Late";
    RedeemDate.textContent = 'Date: 15 Sept - 30 Nov 2024';
    RedeemFormTitle.textContent = 'Redeem Your Code Here!';
    RedeemFormNameAsIc.placeholder = 'Full Name as per IC';
    RedeemFormIcNo.placeholder = 'IC No. Example: 900123131234';
    RedeemFormPhone.placeholder = 'Please enter your number';
    RedeemFormEmail.placeholder = 'Please enter your email';
    RedeemFormReferralCode.placeholder = 'Please enter a valid referral code';
    RedeemFormSubmitBtn.textContent = 'Submit';
    NavbarContest.textContent = 'Impian Malaysia Contest';
    NavbarContestJoin.textContent = 'Join';
  }
}





