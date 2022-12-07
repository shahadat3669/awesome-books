const navBookList = document.getElementById('navBookList');
const navAddBook = document.getElementById('navAddBook');
const navContact = document.getElementById('navContact');

const bookList = document.getElementById('bookList');
const addBook = document.getElementById('addBook');
const contact = document.getElementById('contact');

const removeAddFun = (navLink1, navLink2, navLink3, item1, item2, item3) => {
  navLink1.addEventListener('click', () => {
    item1.classList.remove('hide-section');
    item2.classList.add('hide-section');
    item3.classList.add('hide-section');
    navLink1.parentNode.classList.add('navbar-item-active');
    navLink2.parentNode.classList.remove('navbar-item-active');
    navLink3.parentNode.classList.remove('navbar-item-active');
  });
};

const menu = () => {
  removeAddFun(navBookList, navAddBook, navContact, bookList, addBook, contact);
  removeAddFun(navAddBook, navBookList, navContact, addBook, bookList, contact);
  removeAddFun(navContact, navBookList, navAddBook, contact, addBook, bookList);
};

export default menu;
