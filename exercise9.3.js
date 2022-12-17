const button = document.querySelector('.j-request');
const result = document.querySelector('.j-result');
const xhr = new XMLHttpRequest();


const getData = (url, callback) => {
   xhr.open('GET', url, true)
   xhr.onload = function () {
      if (xhr.status != 200) {
         console.log('Cтатус ответа:', xhr.status);
      } else {
         console.log('Запрос выполнен успешно', xhr.response)
         const data = JSON.parse(xhr.response)
         if (callback) {
            return callback(data)
         }
      }
   }
   xhr.onerror = function () {
      console.log('Ошибка! Статус ответа: ', xhr.status);
   };
   xhr.send()
}

const renderPicture = (data) => {
   let cards = '';
   data.forEach(item => {
      const card = `
         <div class="card">
         <img src="${item.download_url}" alt="" class="card-img">
         <span class="card-author">${item.author}</span>
         </div>
         `
      cards += card;
   });

   result.innerHTML = cards;
}

button.addEventListener('click', () => {
   const value = document.querySelector('.input').value;
   if (value >= 1 && value <= 10) {
      getData(`https://picsum.photos/v2/list/?limit=${value}`, renderPicture)
   } else {
      const error = `
      <div class="card">
      <p>число вне диапазона от 1 до 10</p>
      </div>`;
      result.innerHTML = error
   }
})

