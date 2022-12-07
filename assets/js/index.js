import BookCollection from './modules/BookCollection.js';
import generateBookItems from './modules/GenerateBookItems.js';
import menu from './modules/Menu.js';
import { closeMenu, mobileMenu } from './modules/MobileMenu.js';
import { DateTime } from './modules/luxon.js';

const hamburger = document.querySelector('#navbar-hamburger');
const navLink = document.querySelectorAll('.navbar-link');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBookForm = document.querySelector('#addBookForm');

const bookCollection = new BookCollection();

hamburger.addEventListener('click', mobileMenu);
navLink.forEach((n) => n.addEventListener('click', closeMenu));

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let temp = -1;
  bookCollection.bookCollection.map((object) => {
    if (object.id > temp) {
      temp = object.id;
    }
    return true;
  });

  if (bookTitle.value && bookAuthor.value) {
    bookCollection.addBook(temp + 1, bookTitle.value, bookAuthor.value);
    bookTitle.value = '';
    bookAuthor.value = '';
    generateBookItems(bookCollection);
  }
});

generateBookItems(bookCollection);
menu();

setInterval(() => {
  const date = document.getElementById('date');
  date.textContent = DateTime.now().toFormat('LLL dd yyyy, TT');
}, 1000);
