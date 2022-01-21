//more dropdown
const more = document.querySelector('.more');
const dropDowm = document.querySelector('.dropdown');

more.addEventListener('mouseover', ()=>{
  dropDowm.style.display = 'flex';
  
})
more.addEventListener('mouseout', ()=>{
  dropDowm.style.display = 'none';
})









//slide show code
const slideContainer = document.querySelector('.slide');
const h2 = document.querySelector('.image-information h2');
const pTag = document.querySelector('.image-information p');
// const imagesArray = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg'];
const imageObArray = [
  {
    image: 'image1.jpg',
    h2: 'LOS ANGELES 1',
    p: 'Some image information 1'
  },
  {
    image: 'image2.jpg',
    h2: 'LOS ANGELES 2',
    p: 'Some image information 2'
  },
  {
    image: 'image3.jpg',
    h2: 'LOS ANGELES 3',
    p: 'Some image information 3'
  },
  {
    image: 'image4.jpg',
    h2: 'LOS ANGELES 4',
    p: 'Some image information 4'
  },
]
let count = 0;


const slideShow = () => {
  if(count >= 4){
    count = 0;
  }
  slideContainer.style.backgroundImage = `url(./images/${imageObArray[count].image})`; 
  h2.innerText = imageObArray[count].h2;
  pTag.innerText = imageObArray[count].p;
  count++;
  setTimeout(slideShow,2000);
 
}

setTimeout(slideShow,2000);

//nav bar functionality
const bars = document.querySelector('#mobile');
const mob = document.querySelectorAll('.mob');
let isClicked = false;
bars.addEventListener('click', ()=>{
  if(isClicked){
    mob.forEach(element => element.style.display ='none');
    isClicked = false;
  }else{
    mob.forEach(element => element.style.display ='block');
    isClicked = true;
  }
})


