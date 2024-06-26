const urlParams = new URLSearchParams(window.location.search);

const userId = urlParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Нет ответа сервера');
    }
    return response.json();
  })
  .then(user => {
    const name = document.querySelector('.card__name');
    const email = document.querySelector('.card__email');
    const description = document.querySelector('.card__description');
    const tel = document.querySelector('.card__telephone');

    email.textContent = `${user.email}`;
    tel.textContent = `${user.phone}`;
    name.textContent = `${user.name}`;
    description.textContent = `${user.company.catchPhrase}`;
  })
  .catch(error => console.error('Ошибка запроса данных:', error));
