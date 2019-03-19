const innerButtons = '<div class="ib" data-num="1"></div><div class="ib" data-num="2"></div><div class="ib" data-num="3"></div><div class="ib" data-num="4"></div><div class="ib" data-num="5"></div><div class="ib" data-num="6"></div><div class="ib" data-num="7"></div><div class="ib" data-num="8"></div><div class="ib" data-num="9"></div>';

const $ = s => document.querySelectorAll(s);
const $$ = (s, c) => $(s).forEach(e => c(e));

$$('td', el => {
    el.innerHTML = innerButtons;
    
});

$$('.ib', el => {
    el.innerText = el.dataset['num'];
    el.addEventListener('click', () => {
        console.log(el);
        el.style.visibility = (el.style.visibility === 'hidden') ? 'visible' : 'hidden';
    });
});