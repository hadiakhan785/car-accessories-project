function init() {
    // event listener
    document.querySelector('article').addEventListener('click', () => {
        if (document.querySelector('.collapse-nav').style.visibility == 'visible') {
            document.querySelector('.collapse-nav').style.visibility = 'hidden';
        }
    });

    document.querySelector('footer').addEventListener('click', () => {
        if (document.querySelector('.collapse-nav').style.visibility == 'visible') {
            document.querySelector('.collapse-nav').style.visibility = 'hidden';
        }
    });

    document.querySelector('.collapse-nav').addEventListener('click', () => {
        if (document.querySelector('.collapse-nav').style.visibility == 'visible') {
            document.querySelector('.collapse-nav').style.visibility = 'hidden';
        }
    });
}

function collapseMenu() {
    if (document.querySelector('.collapse-nav').style.visibility == 'hidden') {
        document.querySelector('.collapse-nav').style.transition = '800ms';        
        document.querySelector('.collapse-nav').style.visibility = 'visible';
        document.querySelector('.collapse-nav').classList.remove('fadeOutLeft');
        document.querySelector('.collapse-nav').classList.add('fadeInLeft');

    } else {
        document.querySelector('.collapse-nav').classList.remove('fadeInLeft');
        document.querySelector('.collapse-nav').classList.add('fadeOutLeft');
        document.querySelector('.collapse-nav').style.visibility = 'hidden';


    }
}