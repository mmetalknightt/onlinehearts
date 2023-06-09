import React from 'react';
import Typewriter from "typewriter-effect";
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import { useMediaQuery } from 'react-responsive';

function Appyemk(){
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
                        .typeString("A 2 hour B2B dance mix wiv MOONKAY <br/> + MMETALKNIGHTT for MOONKAY's radio show,<br> YOUTH ETERNAL @ 1020 RADIO<br>")
                        .start();
                }}
            />
            <a href='https://soundcloud.com/moonkaymixes2/1020-moonkay-b2b-mmetalknightt' target='_blank' rel='noreferrer'>
                + listen (soundcloud) <br  />
                </a>
                <a href='https://www.mixcloud.com/1020Radio/youth-eternal-17th-february-20233/' target='_blank' rel='noreferrer'>
                + listen (mixcloud)
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
        <text> <br /> <br /><br /><br /><br /></text>
    <Typewriter
        onInit={(typewriter) => {
            typewriter
                .changeDelay(10)
                .typeString("A 2 hour B2B dance mix wiv MOONKAY <br/> + MMETALKNIGHTT for MOONKAY's radio show,<br> YOUTH ETERNAL @ 1020 RADIO<br>")
                .start();
        }}
    />
    <a href='https://soundcloud.com/moonkaymixes2/1020-moonkay-b2b-mmetalknightt' target='_blank' rel='noreferrer'>
        + listen (soundcloud) <br  />
        </a>
        <a href='https://www.mixcloud.com/1020Radio/youth-eternal-17th-february-20233/' target='_blank' rel='noreferrer'>
        + listen (mixcloud)
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

export default Appyemk;