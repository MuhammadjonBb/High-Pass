// плавный скролл по якорям
import SmoothScroll from './components/smooth-scroll.js';
const scroll = new SmoothScroll('a[href*="#"]');

// валидация формы
import JustValidate from './components/just-validate.js';
const validation = new JustValidate('#contacts-form');
const aboutFormValidate = new JustValidate('#about-form', {
  errorLabelCssClass: 'about__form-err-label',
})

validation
  .addField("#name", [
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Поле должно содержать минимум 3 символа",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Поле должно содержать максимум 30 символов",
    },
    {
      rule: "required",
      errorMessage: "Как вас зовут?",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Укажите ваш e-mail",
    },
    {
      rule: "email",
      errorMessage: "Email не верный!",
    },
  ]);

aboutFormValidate

  .addField("#about-email", [
    {
      rule: "required",
      errorMessage: "Укажите ваш e-mail",
    },
    {
      rule: "email",
      errorMessage: "Email не верный!",
    },
  ]);
