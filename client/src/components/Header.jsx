import React from 'react';
import {
  NavBar,
  Logo
} from './index';

// const HeaderStyles = styled.header`
// width: 100vw;
// height: 15vh;
// background-color: #5c4f6d;
// box-shadow: 2px 2px 2px 1px rgba(0,0,0);
// `;

import userIcon from '../assets/images/userIcon.png';

const Header = () => {
  return (
    <header>
       <NavBar />
       <Logo />
      <img src={userIcon} style={{
        width: '30px',
        height: '30px',
      }}/>
    </header>
  )
}

export default Header