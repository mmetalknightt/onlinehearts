import React from 'react'
import '../../App.css';
import {SidebarData} from './SidebarData'
import { useMediaQuery } from 'react-responsive';

function Sidebar() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div>
      {isDesktopOrLaptop &&
    <div className="Sidebar">
        <ul className="SidebarList">
            {SidebarData.map((val, key)=> {
                return (
                    <li
                        key={key}
                        className="row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={()=> {
                            window.location.pathname = val.link
                        }}
                    >
                        {" "}
                        <div>
                            {val.title}
                        </div>
                    </li>
                );
            })}
        </ul>
    </div>
    }

{isTabletOrMobile &&
    <div className="SidebarMob">
        <ul className="SidebarListMob">
            {SidebarData.map((val, key)=> {
                return (
                    <li
                        key={key}
                        className="row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={()=> {
                            window.location.pathname = val.link
                        }}
                    >
                        {" "}
                        <div>
                            {val.title}
                        </div>
                    </li>
                );
            })}
        </ul>
    </div>
    } 
    </div>

    
  )
}

export default Sidebar
