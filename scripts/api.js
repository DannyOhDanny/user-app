fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Нет ответа сервера');
    }
    return response.json();
  })
  .then(users => {
    const userList = document.querySelector('.user-list');
    users.forEach(user => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-user', JSON.stringify(user));

      listItem.addEventListener('click', () => {
        const userData = JSON.parse(listItem.getAttribute('data-user'));
        window.location.href = `user.html?id=${userData.id}`;
      });

      listItem.className = 'user-list__item';
      listItem.id = `${user.id}`;
      listItem.textContent = `${user.name}`;
      userList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Ошибка запроса данных:', error));
