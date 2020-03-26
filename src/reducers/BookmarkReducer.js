import uuid from 'uuid/v4';

export const BookmarkReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return [...state, { title: action.bookmark.title, url: action.bookmark.url, id: uuid() }];
    case 'REMOVE_BOOKMARK':
      return state.filter(bookmark => bookmark.id !== action.id);
    default:
      return state;
  }
};
