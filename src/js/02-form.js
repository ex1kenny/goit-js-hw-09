const feedbackFormState = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', event => {
  const formData = new FormData(form);
  const formArr = {};
  formData.forEach((value, key) => {
    formArr[key] = value;
  });

  localStorage.setItem(feedbackFormState, JSON.stringify(formArr));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const emailValue = form.querySelector('[name="email"]').value;
  const messageValue = textarea.value;
  localStorage.removeItem(feedbackFormState);
  form.reset();
  const formDataObject = { email: emailValue, message: messageValue };
  console.log(formDataObject);
});

try {
  const initialFormData = JSON.parse(localStorage.getItem(feedbackFormState));

  Array.from(form.elements).forEach(element => {
    const storageValue = initialFormData[element.name];
    if (storageValue) {
      element.value = storageValue;
    }
  });
} catch (error) {
  console.error(error);
}
