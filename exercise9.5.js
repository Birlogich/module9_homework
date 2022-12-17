const requestButton = document.querySelector('.j-request')
const requestResult = document.querySelector('.j-result')


requestButton.addEventListener('click', async () => {
   const getPageNumber = document.querySelector('.j-get-page').value
   const getPictureLimit = document.querySelector('.j-get-limit').value

   if (getPageNumber > 10 && getPageNumber < 1 || typeof (getPageNumber) !== "number") {
      requestResult.innerHTML = '<p>Номер страницы вне диапазона от 1 до 10</p>'
   }
   if (getPictureLimit > 10 && getPictureLimit < 1 || typeof (getPictureLimit) !== "number") {
      requestResult.innerHTML = '<p>Лимит вне диапазона от 1 до 10</p>'
   }
   if ((getPageNumber > 10 && getPageNumber < 1 || typeof (getPageNumber) !== "number") && (getPictureLimit > 10 && getPictureLimit < 1 || typeof (getPictureLimit) !== "number")) {
      requestResult.innerHTML = '<p>Номер страницы и лимит вне диапазона от 1 до 10</p>'
   } else {
      const url = `https://picsum.photos/v2/list?page=${getPageNumber}&limit=${getPictureLimit}`
      await getPictures(url)
   }
})

const getPictures = (url) => {
   return fetch(url)
      .then((response) => response.json())
      .then((data) => {
         renderPictures(data)
      })
      .catch((error) => requestResult.innerHTML = error.status)
}

const renderPictures = (data) => {
   const stringOfData = JSON.stringify(data)
   localStorage.setItem('arrOfImages', stringOfData);
   let cards = '';
   data.forEach(item => {
      const card = `
         <div class="card">
         <img src="${item.download_url}" alt="" class="card-img">
         <span class="card-author">${item.author}</span>
         </div>`
      cards += card;
   });
   requestResult.innerHTML = cards;

}


window.addEventListener("DOMContentLoaded", () => {
   const localStorageData = localStorage.getItem('arrOfImages')
   if (localStorageData != null) {
      renderPictures(JSON.parse(localStorageData))
   } else {
      return false
   }
})
