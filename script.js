const authorContainer = document.querySelector('.article__author-container');
const btn = document.querySelector('.btn-share');

const bottomContainer = document.querySelector('.article__bottom-container');

const bottomWrapper = document.querySelector('.article__bottom-wrapper');

let shareContainer = null;


function changeDisplay() {
    if (!shareContainer) {
        shareContainer = document.createElement('div');
        shareContainer.classList.add('article__share-container');

        const shareTextContainer = document.createElement('div');
        shareTextContainer.classList.add('share-text_container');
        const shareText = document.createElement('p');
        shareText.classList.add('share-text');
        shareText.textContent = 'Share';

        const socialsContainer = document.createElement('div');
        socialsContainer.classList.add('article__share-socials');

        const facebookIcon = document.createElement('img');
        facebookIcon.src = './images/icon-facebook.svg';
        facebookIcon.alt = 'facebook icon';

        const twitterIcon = document.createElement('img');
        twitterIcon.src = './images/icon-twitter.svg';
        twitterIcon.alt = 'twitter icon';

        const pinterestIcon = document.createElement('img');
        pinterestIcon.src = './images/icon-pinterest.svg';
        pinterestIcon.alt = 'pinterest icon';

        socialsContainer.appendChild(facebookIcon);
        socialsContainer.appendChild(twitterIcon);
        socialsContainer.appendChild(pinterestIcon);

        shareContainer.appendChild(shareTextContainer);
        shareContainer.appendChild(socialsContainer);
        shareTextContainer.appendChild(shareText);

        bottomContainer.style.background = "hsl(217, 19%, 35%)";

        bottomWrapper.replaceChild(shareContainer, authorContainer);

        btn.classList.add('active');
        btn.querySelector('svg').classList.add('active');


    } else {
        bottomContainer.style.background = "none";

        btn.classList.remove('active');
        btn.querySelector('svg').classList.remove('active');

        bottomWrapper.replaceChild(authorContainer, shareContainer);
        shareContainer = null;
    }
}

function showFloatingWindow() {
    if (window.innerWidth >= 710) {
        if (!shareContainer) {
            shareContainer = document.createElement('div');
            shareContainer.classList.add('article__share-container', 'floating');

            const shareTextContainer = document.createElement('div');
            shareTextContainer.classList.add('share-text_container');
            const shareText = document.createElement('p');
            shareText.classList.add('share-text');
            shareText.textContent = 'Share';

            const socialsContainer = document.createElement('div');
            socialsContainer.classList.add('article__share-socials');

            const facebookIcon = document.createElement('img');
            facebookIcon.src = './images/icon-facebook.svg';
            facebookIcon.alt = 'facebook icon';

            const twitterIcon = document.createElement('img');
            twitterIcon.src = './images/icon-twitter.svg';
            twitterIcon.alt = 'twitter icon';

            const pinterestIcon = document.createElement('img');
            pinterestIcon.src = './images/icon-pinterest.svg';
            pinterestIcon.alt = 'pinterest icon';

            socialsContainer.appendChild(facebookIcon);
            socialsContainer.appendChild(twitterIcon);
            socialsContainer.appendChild(pinterestIcon);

            shareContainer.appendChild(shareTextContainer);
            shareContainer.appendChild(socialsContainer);
            shareTextContainer.appendChild(shareText);

            document.body.appendChild(shareContainer);

            shareContainer.style.top = `${btn.getBoundingClientRect().top - shareContainer.offsetHeight - 10}px`;
            shareContainer.style.left = `${btn.getBoundingClientRect().left}px`;

            btn.classList.add('active');
            btn.querySelector('svg').classList.add('active');
        } else {
            document.body.removeChild(shareContainer);
            btn.classList.remove('active');
            btn.querySelector('svg').classList.remove('active');
            shareContainer = null;
        }
    } else {
        changeDisplay();
    }
}

btn.addEventListener('click', () => {
    showFloatingWindow()
});

window.addEventListener('resize', () => {
    if (shareContainer) {
        if (window.innerWidth >= 710) {
            shareContainer.style.top = `${btn.getBoundingClientRect().top - shareContainer.offsetHeight - 10}px`;
            shareContainer.style.left = `${btn.getBoundingClientRect().left}px`;
            changeDisplay();
        } else {
            document.body.removeChild(shareContainer);
            btn.classList.remove('active');
            btn.querySelector('svg').classList.remove('active');
            shareContainer = null;
        }
    }
});