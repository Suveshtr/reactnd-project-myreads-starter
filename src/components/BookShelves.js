import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

//This component provides filtered books to book shelves
class BookShelves extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

   
  render() {

    const { books, onChangeShelf } = this.props
    const shelfTitiles = {
      wantToRead: 'Want To Read',
      currentlyReading: 'Currently Reading',
      read: 'Read'
    }

    const shelfTypes = {
      wantToRead: 'wantToRead',
      currentlyReading: 'currentlyReading',
      read: 'read'
    }
   
    let wantToReadBooks, currentlyReadingBooks, readBooks
    
    wantToReadBooks = books.filter( (book) =>  book.shelf === shelfTypes.wantToRead )
    currentlyReadingBooks = books.filter( (book) => book.shelf === shelfTypes.currentlyReading )
    readBooks = books.filter( (book) => book.shelf === shelfTypes.read )

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <BookShelf 
          books={wantToReadBooks} 
          shelfTitle={shelfTitiles.wantToRead} 
          onChangeShelf={onChangeShelf}
        />
        <BookShelf 
          books={currentlyReadingBooks} 
          shelfTitle={shelfTitiles.currentlyReading} 
          onChangeShelf={onChangeShelf}  
        />
        <BookShelf 
          books={readBooks} 
          shelfTitle={shelfTitiles.read} 
          onChangeShelf={onChangeShelf}
        />

      </div>

    )
  }
}

export default BookShelves