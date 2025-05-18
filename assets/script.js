const openMenu = document.getElementById('open-menu__nav');
const closeMenu = document.getElementById('close-menu__nav');
const sectionMenu = document.querySelector('.items-menu__nav');

openMenu.addEventListener('click', () => {
    sectionMenu.classList.add('translate');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    sectionMenu.classList.remove('translate');
    document.body.style.overflow = '';
});

document.querySelectorAll('.items-menu__nav a').forEach(link => {
    link.addEventListener('click', () => {
        sectionMenu.classList.remove('translate');
        document.body.style.overflow = '';
    });
});

//COPIAR EL CORREO ELECTRONICO
const btnCopiar = document.getElementById('copy-email');
const email = document.querySelector('.email__contacto').textContent;
const iconEmail = document.getElementById('email-icon');
btnCopiar.addEventListener('click', () => {
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    iconEmail.style.stroke = 'rgb(5, 198, 5)';

    setTimeout(() => {
        iconEmail.style.stroke = '#60519b';
    }, 2000);
});