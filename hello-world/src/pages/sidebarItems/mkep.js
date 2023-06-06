import React from 'react';
import Typewriter from "typewriter-effect";
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import { useMediaQuery } from 'react-responsive';

function Appmkep(){
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    return (
        <div>
            {isDesktopOrLaptop &&
            <div>
        <div className='headerContainer' style={{position: 'absolute'}}>
            <Header/>
        </div>
        <div className= "SidebarContainer" style={{position: 'absolute'}}>
            <Sidebar/>
        </div>
        <div className= "deskContainer" style={{position: 'absolute'}}> 
            <div className="london" style={{position: 'fixed'}}>
            <text> <br /> <br /></text>
        <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .changeDelay(10)
                        .typeString("A 4 track debut EP to signal the <br>beginning of a new moniker <br>")
                        .start();
                }}
            />
        <a href='https://soundcloud.com/mmmiiikkkiii/sets/metalknight-ep' target='_blank' rel='noreferrer'>
                + listen (soundcloud) <br  />
                </a>
                <a href='https://www.youtube.com/watch?v=zlrT_P9agvQ&pp=ygUQbW1ldGFsa25pZ2h0dCBlcA%3D%3D' target='_blank' rel='noreferrer'>
                + listen (youtube) <br  />
                </a>
        </div>
        </div>
        </div>
}
{isTabletOrMobile &&
    <div>
    <div className='headerContainerMob' style={{position: 'absolute'}}>
        <Header/>
    </div>
    <div className= "SidebarContainerMob" style={{position: 'absolute'}}>
        <Sidebar/>
    </div>
    <div className= "deskContainerMob" style={{position: 'absolute'}}> 
        <div className="london" style={{position: 'fixed'}}>
        <text> <br /> <br /><br /><br /><br /><br /></text>
    <Typewriter
            onInit={(typewriter) => {
                typewriter
                    .changeDelay(10)
                    .typeString("A 4 track debut EP to signal the <br>beginning of a new moniker <br>")
                    .start();
            }}
        />
    <a href='https://soundcloud.com/mmmiiikkkiii/sets/metalknight-ep' target='_blank' rel='noreferrer'>
            + listen (soundcloud) <br  />
            </a>
            <a href='https://www.youtube.com/watch?v=zlrT_P9agvQ&pp=ygUQbW1ldGFsa25pZ2h0dCBlcA%3D%3D' target='_blank' rel='noreferrer'>
            + listen (youtube) <br  />
            </a>
    </div>
    </div>
    </div>
}
        </div>
        
    )
}

export default Appmkep;