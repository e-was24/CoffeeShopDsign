

const SHbtn = document.getElementById('SHbtn');
const myNavbar = document.getElementById('navbar')

SHbtn.addEventListener('click', function () {
    myNavbar.classList.toggle('navbar-show');
    SHbtn.classList.toggle('btn-animation')
})
