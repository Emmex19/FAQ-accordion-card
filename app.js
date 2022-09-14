const h2s = document.querySelectorAll('h2')
for (let h2 of h2s) {
    h2.addEventListener('click', function () {
        this.classList.toggle('boldh2')
        this.nextElementSibling.classList.toggle('none')
        this.firstElementChild.classList.toggle('rotate')
    })
}