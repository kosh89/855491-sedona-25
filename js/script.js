const showFormBtn = document.querySelector('.search-hotel__show-form');
const searchForm = document.querySelector('.search-hotel__form');

const formActiveClass = 'search-hotel__form--active';

showFormBtn.addEventListener('click', function(e) {
    e.preventDefault();
    searchForm.classList.toggle(formActiveClass);
})