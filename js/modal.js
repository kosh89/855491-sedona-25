const showFormBtn = document.querySelector('.search-hotel__show-form');
const searchForm = document.querySelector('.search-hotel__form');
const arrival = searchForm.querySelector('#arrival');
const departure = searchForm.querySelector('#departure');
const adults = searchForm.querySelector('#adults');
const children = searchForm.querySelector('#children');
const formHiddenClass = 'search-hotel__form--hidden';
const formErrorClass = 'search-hotel__form--error';

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
  searchForm.classList.toggle(formHiddenClass);
  searchForm.classList.remove(formErrorClass);
})

if (storageAdults) {
  adults.value = storageAdults;
}

if (storageChildren) {
  children.value = storageChildren;
}

searchForm.addEventListener('submit', function (e) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
    e.preventDefault();
    searchForm.classList.remove(formErrorClass);
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add(formErrorClass);    
  } else {
    if (isStorageSupport) {
      localStorage.setItem('adults', adults.value);
      localStorage.setItem('children', children.value);
    }
  }
})