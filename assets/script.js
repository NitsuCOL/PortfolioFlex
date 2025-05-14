const openMenu = document.getElementById('open-menu__nav');
const closeMenu = document.getElementById('close-menu__nav');
const sectionMenu = document.querySelector('.items-menu__nav');

openMenu.addEventListener('click', () =>{
    sectionMenu.classList.remove('hiden');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () =>{
    sectionMenu.classList.add('hiden');
    document.body.style.overflow = '';
});

document.querySelectorAll('.items-menu__nav a').forEach(link => {
    link.addEventListener('click', () => {
        sectionMenu.classList.add('hiden');
        document.body.style.overflow = '';
    });
});
