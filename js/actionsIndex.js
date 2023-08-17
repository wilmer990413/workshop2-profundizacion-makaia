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
