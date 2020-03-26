import React, { createContext, useReducer, useEffect } from 'react';
import { BookmarkReducer } from '../reducers/BookmarkReducer';

export const BookmarkContext = createContext();

const BookmarkContextProvider = ({ children }) => {
  const [bookmarks, dispatch] = useReducer(BookmarkReducer, [], () => {
    const localData = localStorage.getItem('bookmarks');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <BookmarkContext.Provider value={{ bookmarks, dispatch }}>{children}</BookmarkContext.Provider>
  );
};

export default BookmarkContextProvider;
