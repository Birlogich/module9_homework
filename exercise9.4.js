const inputWidth = document.querySelector('.form-img-width').value
const inputHeight = document.querySelector('.form-img-height').value
const requestButton = document.querySelector('.j-request')
const requestResult = document.querySelector('.j-result')

const getRequest = (url) => {
   return fetch(url)
      .then((response) => {
         return response.url;
      })
      .then((data) => {
         const getImage = `<div class="image">
          <img
           src="${data}" Width="${inputWidth}" Height="${inputHeight}"
           class="card-image"/>
       </div>`;
         return requestResult.innerHTML = getImage
      })
      .catch(() => { console.log('Ошибка!') });
}

requestButton.addEventListener('click', async () => {
   const inputWidth = document.querySelector('.form-img-width').value
   const inputHeight = document.querySelector('.form-img-height').value
   if (inputWidth >= 100 && inputWidth <= 300 || inputHeight >= 100 && inputHeight <= 300) {
      const url = `https://picsum.photos/${inputWidth}/${inputHeight}`
      await getRequest(url)
   } else {
      requestResult.innerHTML = 'одно из чисел вне диапазона от 100 до 300'
   }
})


