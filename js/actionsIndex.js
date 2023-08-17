document.getElementById('features').addEventListener('click', function(){hideOrNotHideModal('features','.modal__features')});
document.getElementById('company').addEventListener('click', function(){hideOrNotHideModal('company','.modal__company')});

function hideOrNotHideModal(id,modal){
    if(document.querySelector(modal).style.display === 'flex'){
        document.getElementById(id).querySelector('img').src = './images/icon-arrow-down.svg';
        document.querySelector(modal).style.display = 'none';
    }else{
        document.getElementById(id).querySelector('img').src = './images/icon-arrow-up.svg';
        document.querySelector(modal).style.display = 'flex';
    }
}

window.addEventListener('resize', changeImagen);

function changeImagen(){
    if (window.innerWidth > 700) {
        document.querySelector('.section__image--figure').querySelector('img').src = './images/image-hero-desktop.png';
    }else{
        document.querySelector('.section__image--figure').querySelector('img').src = './images/image-hero-mobile.png';
        document.querySelector('.modal__company').style.display = 'none';
        document.querySelector('.modal__features').style.display = 'none';
    }
}

changeImagen();