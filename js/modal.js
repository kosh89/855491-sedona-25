const showFormBtn = document.querySelector('.search-hotel__show-form');
const searchForm = document.querySelector('.search-hotel__form');
const adults = searchForm.querySelector('#adults');
const children = searchForm.querySelector('#children');
const formActiveClass = 'search-hotel__form--active';

let isStorageSupport = true;
let storageAdults = '';
let storageChildren = '';

try {
  storageAdults = localStorage.getItem('adults');
  storageChildren = localStorage.getItem('children');
} catch (err) {
  isStorageSupport = false;
}

showFormBtn.addEventListener('click', function (e) {
  e.preventDefault();
  searchForm.classList.toggle(formActiveClass);
})

if (storageAdults) {
  adults.value = storageAdults;
}

if (storageChildren) {
  children.value = storageChildren;
}

searchForm.addEventListener('submit', function (e) {
  if (!adults.value || !children.value) {
    e.preventDefault();
    console.log(adults.value, children.value)
  } else {
    if (isStorageSupport) {
      localStorage.setItem('adults', adults.value);
      localStorage.setItem('children', children.value);
    }
  }
})