//images are from unity, i dont own any graphical asset
const images = document.querySelectorAll("img");
for(let i=0; i< images.length; i++){
    images[i].ondragstart = () => { return false; };
}
