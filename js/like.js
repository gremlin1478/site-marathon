let like = document.querySelector('.like-button');
let likesCounter = document.querySelector('.like-counter');


like.onclick = function () {
    if (like.classList.contains('liked')) {
        likesCounter.textContent--;
    } else {
        likesCounter.textContent++;
    }

    like.classList.toggle('liked');
};
