document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('nav ul li a');

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert(`Вы нажали на ${event.target.innerText}`);
        });
    });
});
