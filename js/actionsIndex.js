document.getElementById('features').addEventListener('click', function(){hideOrNotHideModal('.modal__features')});
document.getElementById('company').addEventListener('click', function(){hideOrNotHideModal('.modal__company')});
function hideOrNotHideModal(modal){
    console.log(document.querySelector(modal).style.display,'pare');
    if(document.querySelector(modal).style.display === 'flex'){
        document.querySelector(modal).style.display = 'none';
    }else{
        document.querySelector(modal).style.display = 'flex';
    }
}