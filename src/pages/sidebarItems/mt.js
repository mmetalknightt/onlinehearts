import React from 'react';
import Typewriter from "typewriter-effect";
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import { useMediaQuery } from 'react-responsive';

function Appmt(){
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
                                    .typeString("A series of mixes from MK featuring <br>occasional guest mixes<br>")
                                    .start();
                                }}
                            />
                            <a href='https://soundcloud.com/mmmiiikkkiii/sets/miki-transmissions' target='_blank' rel='noreferrer'>
                                + listen
                            </a>
                        </div>
                    </div>
                </div>
            }
            {isTabletOrMobile&&
                <div>
                    <div className='headerContainerMob' style={{position: 'absolute'}}>
                        <Header/>
                    </div>
                    <div className= "deskContainerMob" style={{position: 'absolute'}}> 
                        <div className="london" style={{position: 'fixed'}}>
                            <text> <br /> <br /><br /><br /><br /><br /><br /></text>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                    .changeDelay(10)
                                    .typeString("A series of mixes from MK featuring <br>occasional guest mixes<br>")
                                    .start();
                                }}
                            />
                            <a href='https://soundcloud.com/mmmiiikkkiii/sets/miki-transmissions' target='_blank' rel='noreferrer'>
                                + listen
                            </a>
                        </div>
                    </div>
                    <div className= "SidebarContainerMob" style={{position: 'fixed'}}>
                        <Sidebar/>
                    </div>
                </div>
            }


        </div>

        
        
    )
}

export default Appmt;