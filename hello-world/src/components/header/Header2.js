import React from 'react';
import './Header.css';
import logoUrl from '../../assets/8bit knuckle i sq hq.png';

import {  NavLink  } from "react-router-dom"


function Header2() {
  return (
    <div className='container'>
      <div className='header seperator'>
        <nav>
          <ul>
              <NavLink to='/asgb'>
              <div className='text'>

                [<img src={logoUrl}
                alt="ONLINE HEARTS" />]
              </div>
              </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header2;