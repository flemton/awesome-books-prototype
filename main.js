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