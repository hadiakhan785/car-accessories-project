function init() {
    // event listener
    document.querySelector('article').addEventListener('click', () => {
        if (document.querySelector('.collapse-nav').style.visibility == 'visible') {
            document.querySelector('.collapse-nav').style.visibility = 'hidden';
        }
    });

    document.querySelector('footer').addEventListener('click', () => {
        if (document.querySelector('.collapse-nav').style.visibility == 'visible') {
            closeMenu();
        }
    });

    document.querySelector('.collapse-nav').addEventListener('click', () => {
        if (document.querySelector('.collapse-nav').style.visibility == 'visible') {
            closeMenu();
        }
    });
}

// for open collapse menu
function openCollapseMenu() {
    document.querySelector('.collapse-nav').style.transition = '800ms';
    document.querySelector('.collapse-nav').style.visibility = 'visible';
    document.querySelector('.collapse-nav').classList.remove('fadeOutLeft');
    document.querySelector('.collapse-nav').classList.add('fadeInLeft');
    document.querySelector('#collapse-open-btn').style.display = 'none';
    document.querySelector('#collapse-close-btn').style.display = 'block';
}


// for close collapse menu
function closeMenu() {
    document.querySelector('.collapse-nav').classList.remove('fadeInLeft');
    document.querySelector('.collapse-nav').classList.add('fadeOutLeft');
    document.querySelector('.collapse-nav').style.visibility = 'hidden';
    document.querySelector('#collapse-open-btn').style.display = 'block';
    document.querySelector('#collapse-close-btn').style.display = 'none';

}

