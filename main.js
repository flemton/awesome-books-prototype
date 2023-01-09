const Books = [
    {
      title: '',
      author: ''
    },
    {
      title: '',
      author: ''
    },
    {
      title: '',
      author: ''
    },
    {
      title: '',
      author: ''
    },
    {
      title: '',
      author: ''
    }
  ];

  const bookList = document.querySelector('.book-list');

Books.forEach((Books) => {
    const book = `
    <h5>
    ${Books.title}
    </h5>
    <p>
    ${Books.author}
    <h5>
    <button onclick="removeBook(${Books.title}, ${Books.author})">Remove</button>
    <hr>
    `;
    bookList.innerHTML += book;
  });

  document.bookList.insertBefore(bookList, document.bookList.children[0]);
  
  function addBook(title, author) {
    Books.unshift({title: title, author: author })
  }

  function removeBook(title, author) {
    for (let i = 0; i < Books.length; i++)
        if (Books[i].title == title & Books[i].author == author)
        {
            Books.splice(i, 1);
        }
  }