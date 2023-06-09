import React from 'react';
import Typewriter from "typewriter-effect";
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import { useMediaQuery } from 'react-responsive';

function Appasgb(){
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
                                .typeString("A 2 hour dance mix for BALAMII to <br>commemorate the debut of <br>A Second Gun, the dance duo consisting<br> of MMETALKNIGHTT + MASCULEAN DREAM.<br>")
                                .start();
                        }}
                    />
            
                    <a href='https://soundcloud.com/balamii/masculean-dream-may-2023' target='_blank' rel='noreferrer'>
                        + listen (soundcloud) <br  />
                    </a>
                    <a href='https://www.mixcloud.com/balamii/masculean-dream-may-2023/' target='_blank' rel='noreferrer'>
                        + listen (mixcloud) <br  />
                    </a>
                    <a href='https://soundcloud.com/asecondgun' target='_blank' rel='noreferrer'>
                        + a second gun (soundcloud) <br  />
                    </a>
                    <a href='https://www.instagram.com/asecondgun/' target='_blank' rel='noreferrer'>
                        + a second gun (instagram)
                    </a>
                </div> 
            </div>
            </div>
}
{isTabletOrMobile &&
    <div>
        <div className='headerContainerMob' style={{position: 'fixed'}}>
            <Header/>
        </div>
        <div className= "deskContainerMob" style={{position: 'fixed'}}> 
            <div className="london" style={{position: 'fixed'}}>
                <text> <br /> <br /></text>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .changeDelay(10)
                        .typeString("A 2 hour dance mix for BALAMII to <br>commemorate the debut of <br>A Second Gun, the dance duo consisting<br> of MMETALKNIGHTT + MASCULEAN DREAM.<br>")
                        .start();
                    }}
                />
            
                <a href='https://soundcloud.com/balamii/masculean-dream-may-2023' target='_blank' rel='noreferrer'>
                    + listen (soundcloud) <br  />
                </a>
                <a href='https://www.mixcloud.com/balamii/masculean-dream-may-2023/' target='_blank' rel='noreferrer'>
                    + listen (mixcloud) <br  />
                </a>
                <a href='https://soundcloud.com/asecondgun' target='_blank' rel='noreferrer'>
                    + a second gun (soundcloud) <br  />
                </a>
                <a href='https://www.instagram.com/asecondgun/' target='_blank' rel='noreferrer'>
                    + a second gun (instagram)
                </a>
            </div> 
        </div>
        <div className= "SidebarContainerMob" style={{position: 'absolute'}}>
            <Sidebar />
        </div>
        
    </div>
}
        </div>
        
        
    );
}

export default Appasgb;