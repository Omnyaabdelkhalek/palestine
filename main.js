const iconGrid = document.getElementById('iconGrid');
const mainIcon = document.getElementById('mainIcon');
if(mainIcon){
  mainIcon.addEventListener('click',function(){
   if (iconGrid.style.display === 'none') {
     iconGrid.style.display = 'block';
   } else {
     iconGrid.style.display = 'none';
   }
 });
}
const baseUrl =  'https://localhost:7145/api/NewsImage/'; 
const numImages = 20;
const imgUrl=1;
function createImageElement(imgUrl, imageId) {
  const imageEl = document.createElement("img");
  imageEl.src = `${baseUrl}${imageId}`;
  imageEl.alt = `"Image" ${imageId}`;
  return imageEl;
}
for (let i = 1; i <= numImages; i++) {
  const imageEl = createImageElement(imgUrl, i);
  document.getElementById("image-container").appendChild(imageEl);
}
