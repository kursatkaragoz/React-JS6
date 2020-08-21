const findikLink = document.getElementById('findik-link');
const fistikLink = document.getElementById('fistik-link');
const cekirdekLink = document.getElementById('cekirdek-link');
const fotoFindik = document.getElementById('foto-findik');
const fotoFistik = document.getElementById('foto-fistik');
const fotoCekirdek = document.getElementById('foto-cekirdek');

const fotoClick = (event) =>{
    const imgList = document.querySelectorAll('img');
    imgList.forEach((img) =>{
        img.style.display = 'none';
    })

    const fotoId = event.target.attributes['data-img'].value;
    const foto = document.getElementById(fotoId);

    foto.style.display = 'inline';
}

findikLink.addEventListener('mouseenter',fotoClick);//click event, mouse enter event, mouseleave event
fistikLink.addEventListener('mouseenter',fotoClick);
cekirdekLink.addEventListener('mouseenter',fotoClick);

