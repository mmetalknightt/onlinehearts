import React from 'react';
import Typewriter from "typewriter-effect";
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import { useMediaQuery } from 'react-responsive';

function Appew(){
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
                        .typeString("A 4 track EP from MMETALKNIGHTT that <br>was intended to break away from a lot <br>of their earlier work. <br>")
                        .start();
                }}
            />
            <a href='https://soundcloud.com/mmmiiikkkiii/sets/eleven-wound' target='_blank' rel='noreferrer'>
                + listen
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
    
    <div className= "deskContainerMob" style={{position: 'absolute'}}> 
        <div className="london" style={{position: 'fixed'}}>
        <text> <br /> <br /><br /><br /><br /><br /></text>
    <Typewriter
        onInit={(typewriter) => {
            typewriter
                .changeDelay(10)
                .typeString("A 4 track EP from MMETALKNIGHTT that <br>was intended to break away from a lot <br>of their earlier work. <br>")
                .start();
        }}
    />
    <a href='https://soundcloud.com/mmmiiikkkiii/sets/eleven-wound' target='_blank' rel='noreferrer'>
        + listen
        </a>
</div>
</div>
<div className= "SidebarContainerMob" style={{position: 'absolute'}}>
        <Sidebar/>
    </div>
</div>
}
        </div>
        
    )
}

export default Appew;