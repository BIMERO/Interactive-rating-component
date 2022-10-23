const maincontainer = document.querySelector('.front');
const thankscontainer = document.querySelector('.main');
const submit = document.querySelector('.btn');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.num');

submit.addEventListener("click", () => {
    thankscontainer.classList.remove("aim");
    maincontainer.style.display = 'none';
});

rates.forEach((rate) => {
    rate.addEventListener('click', () =>{
        rating.innerHTML = rate.innerHTML
    });
});