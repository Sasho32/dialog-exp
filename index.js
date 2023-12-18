const openModalBtn = document.querySelector('body > button');
const modalBtns = Array.from(document.querySelector('button[id*="dialog"]'));

console.log(modalBtns);

openModalBtn.addEventListener('click', () => {
    document.body.classList.add('modal-opened');
});

modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.classList.remove('modal-opened');
    });
});
