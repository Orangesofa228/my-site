
function countPhotos() {
    let photos = document.querySelectorAll('.image-card');
    let counter = document.getElementById('image-counter');

    if (counter) {
        counter.textContent = photos.length;
    }
    console.log('Найдено фотографий:', photos.length);
}


function setupLikes() {
    let likeButtons = document.querySelectorAll('.like-btn');
    let totalLikesElement = document.getElementById('total-likes');
    let totalLikes = 0;

    likeButtons.forEach(function(button) {
        let likesSpan = button.querySelector('.like-count');
        if (button.classList.contains('liked')) {
            totalLikes += parseInt(likesSpan.textContent) || 0;
        }
    });

    if (totalLikesElement) {
        totalLikesElement.textContent = totalLikes;
    }


    likeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let likesSpan = this.querySelector('.like-count');
            let currentLikes = parseInt(likesSpan.textContent) || 0;

            if (this.classList.contains('liked')) {

                currentLikes--;
                totalLikes--;
                this.classList.remove('liked');
            } else {

                currentLikes++;
                totalLikes++;
                this.classList.add('liked');
            }

            likesSpan.textContent = currentLikes;
            if (totalLikesElement) {
                totalLikesElement.textContent = totalLikes;
            }

            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);

            console.log('Лайков всего:', totalLikes);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Галерея загружена!');
    countPhotos();
    setupLikes();

    setTimeout(function() {
        console.log('✅ JavaScript работает правильно!');
    }, 1000);
});
