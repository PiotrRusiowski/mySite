const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const linkList = document.querySelector('.link-list')
let isTrue = true;

const add = () => {
    if (isTrue) {
        menu.classList.toggle("aside");
        setTimeout(() => {
            linkList.classList.toggle("none");
        }, 1000);
        isTrue = false
    } else {
        menu.classList.toggle("aside");
        linkList.classList.toggle("none");
        isTrue = true
    }

};
hamburger.addEventListener('click', add)