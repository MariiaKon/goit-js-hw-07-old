const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryRef = document.getElementById('gallery');

images.forEach(image => {
  const imgItem = `<li style='list-style: none; display: inline-flex; margin: auto;'>
  <img src='${image.url}' alt='${image.alt}' style='margin: 10px; width: 360px; height: 300px;'>
  </li>`
  galleryRef.insertAdjacentHTML('beforeend', imgItem)
});


galleryRef.style.display = 'flex'
galleryRef.style.flexWrap = 'wrap'
galleryRef.style.width = '1200px'
galleryRef.style.padding = '30px'
galleryRef.style.margin = 'auto'


