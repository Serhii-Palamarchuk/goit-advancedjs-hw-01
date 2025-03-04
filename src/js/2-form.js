const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
console.log('form');
// Об'єкт для збереження значень полів форми
let formData = { email: '', message: '' };

// Завантаження збережених даних при завантаженні сторінки
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// Прослуховування змін у формі
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim(); // Записуємо без пробілів по краях
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробник сабміту форми
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});
