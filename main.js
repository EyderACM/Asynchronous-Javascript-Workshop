let imgList = document.querySelector('.myGifList');
let form = document.querySelector('.inputReciever');
let input = document.querySelector('.inputer');
let numberInput = document.querySelector('.numberInputer');

let apiKey = 'qSY42Sd5zvHkzXsVx4141nDB5NDtzkV6';
let link = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}`;
let limit = 5;

form.addEventListener('submit', getText);

function getText(e){
  e.preventDefault();  
  let search = input.value || 'meme';
  limit = numberInput.value;
  let request = `${link}&q=${search}&limit=${limit}`;
  displayGifs(request);
}

function displayGifs(toSearch){
  imgList.innerHTML = '';
  fetch(toSearch)
  .then(res => res.json())
  .then(blob => {
    blob.data.map(gif => addGif(gif.id))
  })
  .catch(err => console.log(err));
}

function addGif(gifId){
  let img = `https://media.giphy.com/media/${gifId}/giphy.gif`;
  let newImg = document.createElement('img');
  newImg.src=img;
  imgList.appendChild(newImg);
}

