import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
class SearchBooks extends React.Component {

  state = {
    searchResult: []
  }

  searchBooks = (event) => {

    BooksAPI.search(event.target.value, 20)
      .then((searchedBooks) => {
       
       if (typeof searchedBooks === 'undefined' || searchedBooks.error) {
          searchedBooks=[]
        }
      
        this.setState(({
          searchResult: searchedBooks.map((searchedBook) => {

            this.props.books.map( book => {
              if (book.id === searchedBook.id)
              {
                searchedBook.shelf = book.shelf
              }
              return book
            } )
            return searchedBook
          })
        }))
      })
  }

  render() {
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>      
          <div className="search-books-input-wrapper">
            <input type="text"
              onChange={(event) => this.searchBooks(event)}
              placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {(this.state.searchResult.length > 0) && (this.state.searchResult.map((book) => {
              return <li key={book.id}>
                <Book book={book} onChangeShelf={this.props.onChangeShelf} />
              </li>
            }
            ))}
            
          </ol>
          
        </div>
      </div>
    )
  }
}

export default SearchBooks