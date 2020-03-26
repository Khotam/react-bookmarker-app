import React, { useContext } from 'react';
import { BookmarkContext } from '../contexts/BookmarkContext';
import Bookmark from '../components/Bookmark';

const BookmarksList = () => {
  const { bookmarks } = useContext(BookmarkContext);
  return bookmarks.length ? (
    <div className='bookmarks-list'>
      {bookmarks.map(bookmark => (
        <Bookmark bookmark={bookmark} key={bookmark.id} />
      ))}
    </div>
  ) : (
    <p style={{ marginTop: '1rem', textAlign: 'center', backgroundColor: '#fff', padding: '1rem' }}>
      No bookmarks
    </p>
  );
};

export default BookmarksList;
