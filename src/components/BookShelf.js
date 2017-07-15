import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
class BookShelf extends React.Component {
  
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, shelfTitle, onChangeShelf } = this.props

    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map((book) =>
                  <li key={book.id}>
                    <Book book={book} shelfTitle={shelfTitle} onChangeShelf={onChangeShelf} />
                  </li>
                )}
              </ol>
            </div>
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>

    )
  }
}

export default BookShelf