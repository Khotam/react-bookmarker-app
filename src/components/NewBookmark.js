import React, { useContext, useState, useRef } from 'react';
import { BookmarkContext } from '../contexts/BookmarkContext';

const NewBookmark = () => {
  const { dispatch } = useContext(BookmarkContext);
  const [siteName, setSiteName] = useState('');
  const [siteUrl, setSiteUrl] = useState('');

  const siteNameRef = useRef();
  const siteUrlRef = useRef();

  const domainValidator = domain => {
    const regex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
    if (regex.test(domain)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (domainValidator(siteUrl)) {
      dispatch({ type: 'ADD_BOOKMARK', bookmark: { title: siteName, url: siteUrl } });
      setSiteUrl('');
      setSiteName('');
      if (siteUrlRef.current.classList.contains('invalid')) {
        siteUrlRef.current.classList.remove('invalid');
      }
      siteNameRef.current.focus();
    } else {
      if (siteUrlRef.current.classList.contains('invalid')) {
        siteUrlRef.current.classList.remove('invalid');
        setTimeout(() => {
          siteUrlRef.current.classList.add('invalid');
        }, 100);
      } else {
        siteUrlRef.current.classList.add('invalid');
      }
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='title'>Site name:</label>
        <input
          value={siteName}
          onChange={e => setSiteName(e.target.value)}
          type='text'
          required
          placeholder='e.g Google'
          id='title'
          className='Title'
          ref={siteNameRef}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='url'>Site url:</label>
        <input
          value={siteUrl}
          onChange={e => setSiteUrl(e.target.value)}
          type='text'
          required
          placeholder='e.g google.com'
          id='url'
          className='Url'
          ref={siteUrlRef}
        />
        <span className='error'>Invalid url</span>
      </div>
      <input className='submit-btn' type='submit' />
    </form>
  );
};

export default NewBookmark;
