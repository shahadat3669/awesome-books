import Book from './Book.js';
import { setLocalStorage, getLocalStorage } from './LocalStorage.js';

const storage = getLocalStorage();

class BookCollection {
  constructor() {
    this.bookCollection = storage === null ? [] : storage;
  }

  addBook(id, bookTitle, authorName) {
    const newBook = new Book(id, bookTitle, authorName);
    this.bookCollection.push(newBook);
    setLocalStorage(this.bookCollection);
  }

  getBooks() {
    return this.bookCollection;
  }

  removeBook(bookId) {
    this.bookCollection = this.bookCollection.filter(
      (item) => item.id !== bookId,
    );
    setLocalStorage(this.bookCollection);
  }
}

export default BookCollection;
