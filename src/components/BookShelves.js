import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BookShelves extends React.Component {
    render() {
        wantToReadBooks = [],
        currentlyReadingBooks = [],
        readBooks = []
        
        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              
              <BookShelf books={wantToReadBooks} shelfTitle='Want To Read' />
              <BookShelf books={currentlyReadingBooks} shelfTitle='Currently Reading' />
              <BookShelf books={readBooks} shelfTitle='Read' />
            
            </div>
           
        )
    }
}