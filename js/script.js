function init() {
    document.querySelector('article').addEventListener('click', () => {
        if (document.querySelector('.collapse-nav').style.visibility == 'visible') {
            document.querySelector('.collapse-nav').style.visibility = 'hidden';
        }
    });
}

function collapseMenu() {
    if (document.querySelector('.collapse-nav').style.visibility == 'hidden') {
        document.querySelector('.collapse-nav').style.visibility = 'visible';

    } else {
        document.querySelector('.collapse-nav').style.visibility = 'hidden';

    }
}