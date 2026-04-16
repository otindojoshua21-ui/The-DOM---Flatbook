const bookStore = {
  name: "Flatbooks",
  books: [
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg",
    },
    {
      title: "You Don’t Know JS",
      author: "Kyle Simpson",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX328_BO1,204,203,200_.jpg",
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt & David Thomas",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
    },
  ],
};

const bookStoreTitle = document.getElementById("header");
const bookList = document.getElementById("book-list");

if (bookStoreTitle) {
  bookStoreTitle.textContent = bookStore.name;
}

if (bookList && Array.isArray(bookStore.books)) {
  bookStore.books.forEach((book) => {
    const bookContainer = document.createElement("li");
    bookContainer.className = "book-card";

    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `Author: ${book.author}`;

    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.alt = book.title;

    bookContainer.append(bookImage, bookTitle, bookAuthor);
    bookList.appendChild(bookContainer);
  });
} else {
  console.error("Book list container not found or books data is invalid.");
}
