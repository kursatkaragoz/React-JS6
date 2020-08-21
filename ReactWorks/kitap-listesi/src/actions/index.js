//Actions

//Add Book
export const addBook = ({isbn, title, subtitle, description, author, pages}) => {
  return {
    type: 'ADD_BOOK',
    payload: {
      isbn, title, subtitle, description, author, pages
    }

  }
}

//Delete addBook
export const deleteBook = (book) => {
  return{
    type:'DELETE_BOOK',
    payload: book
  }
}

//Select Book
export const selectBook= (book) => {
  return {
    type:'SELECT_BOOK',
    payload: book
  }
}

export const deSelectBook = () => {
  return {
    type:'DESELECT_BOOK'
  }
}
