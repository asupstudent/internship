const baseSuccessCallbackPrimary = (event) => {
  event.preventDefault();
  // В данном колбеке бэкендер, либо разработчик при необходимости будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки или успешную отправку формы на сервер
  const url = 'https://echo.htmlacademy.ru/';
  const formData = new FormData(document.querySelector('[data-form="form-primary"]'));

  fetch(url, {
    method: 'POST',
    body: formData,
  }).then((response) => response.text()).then((data) => {
    document.body.innerHTML = `<pre>${data}</pre>`;
    window.setTimeout(function(){
      document.location.href="/";
  }, 3000);

  }).catch(() => {
    document.body.innerHTML = 'Ошибка: не удалось отправить форму на сервер';
  });
};

const baseSuccessCallbackSecondary = (event) => {
  event.preventDefault();
  // В данном колбеке бэкендер, либо разработчик при необходимости будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки или успешную отправку формы на сервер
  const url = 'https://echo.htmlacademy.ru/';
  const formData = new FormData(document.querySelector('[data-form="form-secondary"]'));

  fetch(url, {
    method: 'POST',
    body: formData,
  }).then((response) => response.text()).then((data) => {
    document.body.innerHTML = `<pre>${data}</pre>`;
    window.setTimeout(function(){
      document.location.href="/";
  }, 3000);

  }).catch(() => {
    document.body.innerHTML = 'Ошибка: не удалось отправить форму на сервер';
  });
};

const baseErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};

export const callbacks = {
  basePrimary: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallbackPrimary,
    errorCallback: baseErrorCallback,
  },

  baseSecondary: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallbackSecondary,
    errorCallback: baseErrorCallback,
  },
};

