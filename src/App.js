import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelves from './components/BookShelves'

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: true
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
                   
          <BookShelves books={this.state.books} />
        
        )}
      </div>
    )
  }
}

export default BooksApp
