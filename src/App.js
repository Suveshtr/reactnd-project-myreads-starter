import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelves from './components/BookShelves'
import SearchBooks from './components/SearchBooks'
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
        
          <Route path='/search' render={() => (
              <SearchBooks />
            )}
          />
          
          <Route exact path='/' render={() => (
              <BookShelves books={this.state.books} onChangeShelf={this.updateShelf} />
            )}
          />
        
      </div>
    )
  }
}

export default BooksApp
