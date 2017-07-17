import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelves from './components/BookShelves'
import SearchBooks from './components/SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  updateShelf = (book, newShelf) => {
    book.shelf = newShelf
    BooksAPI.update(book, newShelf)
      .then((updatedBook) => {
        this.setState((prevState) => ({
          books: prevState.books.filter( b => b.id !== book.id ).concat(book)
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
              <SearchBooks books={this.state.books} onChangeShelf={this.updateShelf}/>
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
