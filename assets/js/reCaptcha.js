function onSubmit(event) {
  event.preventDefault();

  const recaptchaResponse = grecaptcha.getResponse();
  if (recaptchaResponse === '') {
    alert('Please complete the reCAPTCHA verification.');
    return;
  }

  const form = document.querySelector('#contactForm');
  const formData = new FormData(form);

  let isValid = true;
  form.querySelectorAll('[required]').forEach((input) => {
    let value = input.value;
    if (value && typeof value.trim === 'function') {
      value = value.trim();
    }
    if (value === '') {
      isValid = false;
      input.classList.add('is-invalid');
    } else {
      input.classList.remove('is-invalid');
    }
  });

  if (!isValid) {
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        form.reset();
        document.getElementById('msgSubmit').textContent = 'Your message has been sent. Thank you!';
        document.getElementById('msgSubmit').classList.add('message-success');

      } else {
        alert('Something went wrong, please try again.');
      }
    }
  };
  xhr.send(formData);
}

window.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.addEventListener('click', onSubmit);
});
