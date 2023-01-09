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
