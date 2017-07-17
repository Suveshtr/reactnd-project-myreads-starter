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
    
    const shelfTitles = {
      wantToRead: 'Want To Read',
      currentlyReading: 'Currently Reading',
      read: 'Read'
    }

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        {
          Object.keys(shelfTitles).map((shelfType) => {

            return <BookShelf 
              key={shelfType}
              books={books.filter((book) => book.shelf === shelfType)}
              shelfTitle={shelfTitles[shelfType]}
              onChangeShelf={onChangeShelf}
            />
          })
        }
      </div>

    )
  }
}

export default BookShelves