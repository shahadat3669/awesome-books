const getLocalStorage = () => {
  const bookCollection = JSON.parse(localStorage.getItem('bookCollection'));
  return bookCollection;
};

const setLocalStorage = (bookCollection) => {
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
};

export { getLocalStorage, setLocalStorage };
