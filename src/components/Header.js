import React from 'react';
import QueryMedia from '../hook/QueryMedia';
import HeaderDesk from './HeaderDesk';
import HeaderMobile from './HeaderMobile';

function Header() {
  return (
    <div>
      {QueryMedia() ? <HeaderDesk /> : <HeaderMobile />}
    </div>
  );
}

export default Header;
