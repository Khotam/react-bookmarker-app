import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className='footer'>
      <a href='https://github.com/Khotam/' target='_blank' rel='noopener noreferrer'>
        <span>Github:</span>
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
    </div>
  );
};

export default Footer;
