// temporary script !!! //

window.document.querySelector('.article-2--js').setAttribute('hidden', true);
window.document.querySelector('.article-3--js').setAttribute('hidden', true);
window.document.querySelector('.article-4--js').setAttribute('hidden', true);

window.document.querySelector('.nav__btn--welcome--js').addEventListener('click', () => {
    window.document.querySelector('.article-1--js').removeAttribute('hidden');
    window.document.querySelector('.article-2--js').setAttribute('hidden', true);
    window.document.querySelector('.article-3--js').setAttribute('hidden', true);
    window.document.querySelector('.article-4--js').setAttribute('hidden', true);
});

window.document.querySelector('.nav__btn--rules--js').addEventListener('click', () => {
    window.document.querySelector('.article-2--js').removeAttribute('hidden');
    window.document.querySelector('.article-1--js').setAttribute('hidden', true);
    window.document.querySelector('.article-3--js').setAttribute('hidden', true);
    window.document.querySelector('.article-4--js').setAttribute('hidden', true);
});

window.document.querySelector('.nav__btn--github--js').addEventListener('click', () => {
    window.document.querySelector('.article-3--js').removeAttribute('hidden');
    window.document.querySelector('.article-1--js').setAttribute('hidden', true);
    window.document.querySelector('.article-2--js').setAttribute('hidden', true);
    window.document.querySelector('.article-4--js').setAttribute('hidden', true);
});

window.document.querySelector('.nav__btn--resources--js').addEventListener('click', () => {
    window.document.querySelector('.article-4--js').removeAttribute('hidden');
    window.document.querySelector('.article-1--js').setAttribute('hidden', true);
    window.document.querySelector('.article-2--js').setAttribute('hidden', true);
    window.document.querySelector('.article-3--js').setAttribute('hidden', true);
});

