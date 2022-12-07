const bookListItemsCon = document.querySelector('#bookListItemsCon');

const deleteBtn = (bookCollection) => {
  document.querySelectorAll('.deleteBtn').forEach((element) => {
    element.addEventListener('click', (e) => {
      bookCollection.removeBook(parseInt(e.target.id, 10));
      // eslint-disable-next-line no-use-before-define
      generateBookItems(bookCollection);
    });
  });
};
const generateBookItems = (bookCollection) => {
  const books = bookCollection.getBooks();
  let generateItems = '';
  if (books.length > 0) {
    books.forEach((book) => {
      generateItems += `<li class="book-list-item">
       <div class="item-text">"${book.title}" by ${book.author}</div>
       <div class="btn-wrapper">
         <button class="btn deleteBtn" id=${book.id}>remove</button>
       </div>
     </li>`;
    });
    generateItems = `<ul id="bookListItems" class="book-list-items">${generateItems}</ul>`;
  } else {
    generateItems = '<h3 class="title-3 text-center book-list-hide">No book available.<span> Please add a new book.</span></h3>';
  }
  bookListItemsCon.innerHTML = generateItems;
  deleteBtn(bookCollection);
};

export default generateBookItems;
