const radioElement=document.querySelectorAll('input');
const ratingValue=document.querySelector('.ratingValue');

radioElement.forEach((radio)=>{
    ratingValue.classList.remove('ratingValue');
    radio.addEventListener('click',()=>{

        let rating=radio.value;

        ratingValue.innerText=`${rating} / 5`;
        ratingValue.classList.add('ratingValue');
    });

});

