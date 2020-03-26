import React, { useContext } from 'react';
import { BookmarkContext } from '../contexts/BookmarkContext';

const Header = () => {
  const { bookmarks } = useContext(BookmarkContext);
  return (
    <header>
      <h1 className='logo'>Bookmarker App</h1>
      <p className='header-info'>You have {bookmarks.length} bookmark(s).</p>
    </header>
  );
};

export default Header;
