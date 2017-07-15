import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelves from './components/BookShelves'

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  updateShelf = (book, newShelf) => {
    
    BooksAPI.update(book, newShelf)
      .then((data) => {
        this.setState((prevState) => ({
          books: prevState.books.map( (bookElement) => {
            if( bookElement.id === book.id) {
              bookElement.shelf = newShelf
            }
            return bookElement
          })
        }))
      })
  }

  componentDidMount() {
    BooksAPI.getAll().then((booksReceived) => {
      this.setState({
        books: booksReceived
      })
    })
  }
  render() {
    
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
                   
          <BookShelves books={this.state.books} onChangeShelf={this.updateShelf} />
        
        )}
      </div>
    )
  }
}

export default BooksApp
