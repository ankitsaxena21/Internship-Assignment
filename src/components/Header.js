import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="posts">
      <div className="header">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="posts__home">Post App</div>
        </Link>
        <Link to="/note" style={{ textDecoration: 'none' }}>
          <div className="posts__home">Notepad App</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
