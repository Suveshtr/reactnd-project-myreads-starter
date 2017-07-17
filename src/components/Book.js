import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {
  
  static PropTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  render() {
    
    const { book, onChangeShelf } = this.props
    
    let imageLink = (typeof book.imageLinks !== 'undefined') 
          ? book.imageLinks.smallThumbnail 
          : "http://via.placeholder.com/150"

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imageLink})`
            }}
          />
          
          <div className="book-shelf-changer">
            <select
              onChange={event => onChangeShelf(book, event.target.value)}
              defaultValue={book.shelf}
            >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        { typeof book.autors !== 'undefined' && (
            <div className="book-authors">{book.authors.join(' ,')}</div>
        )}
        
      </div>
    )

  }
}

export default Book