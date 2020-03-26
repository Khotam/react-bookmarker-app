import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BookmarkContext } from '../contexts/BookmarkContext';

const Bookmark = ({ bookmark }) => {
  const { dispatch } = useContext(BookmarkContext);
  const { url } = bookmark;
  const iconTitle = url.split('.')[0].toLowerCase();

  const handleDelete = e => {
    dispatch({ type: 'REMOVE_BOOKMARK', id: bookmark.id });
  };

  return (
    <div className='bookmark'>
      <div className='bookmark-logo'>
        <span>{bookmark.title}</span>
        <FontAwesomeIcon className='brand' icon={['fab', iconTitle]} />
      </div>
      <div className='bookmark-action'>
        <a href={'https://' + url} target='_blank' rel='noopener noreferrer'>
          Visit
        </a>
        <button className='delete-btn' onClick={handleDelete}>
          Delete
          <FontAwesomeIcon className='trash' icon='trash' />
        </button>
      </div>
    </div>
  );
};

export default Bookmark;
