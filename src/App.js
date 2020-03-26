import React from 'react';
import BookmarkContextProvider from './contexts/BookmarkContext';
import Header from './components/Header';
import NewBookmark from './components/NewBookmark';
import BookmarksList from './components/BookmarksList';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <BookmarkContextProvider>
        <Header />
        <NewBookmark />
        <BookmarksList />
      </BookmarkContextProvider>
      <Footer />
    </div>
  );
}

export default App;
