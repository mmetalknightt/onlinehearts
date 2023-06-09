import React from 'react';
import Typewriter from "typewriter-effect";
import {Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header2 from '../../components/header/Header2';



function AppBlueCarRev(){
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    return (
        <div>
            {isDesktopOrLaptop &&
                <div>
                    <div className='headerContainer' style={{position: 'absolute'}}>
                    <Header2/>
                </div>

                <div className= "deskContainerBlog">
                <div className="london" style={{position: 'absolute'}}>
                    
                <Link to="/asgb">
                     [BACK TO WORKS] <br/  >
                </Link> 
                {/*
                [PREV]
                               

                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀[1] 30/5/23 + JOANNE ROBERTSON / BLUE CAR⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀


                <Link to="/amerikaRev">
                 [NEXT] <br/  >
                 </Link> 
                 */}
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀[1] 30/5/23 + JOANNE ROBERTSON / BLUE CAR⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br/>
                 ⠀⠀⠀⠀
                <a href='https://open.spotify.com/album/4iSJMelhccY9eIzR7xWTgv' target='_blank' rel='noreferrer'>
                (spotify)
                </a>
                ⠀
                <a href='https://music.apple.com/us/album/blue-car/1669003169v' target='_blank' rel='noreferrer'>
                 (apple music)
                </a>
                ⠀
                <a href='https://www.youtube.com/watch?v=EaCCi1YTWQQ&list=OLAK5uy_kZERTfnMq_rZcx6nqU4rCRjO8PKwvnKmc' target='_blank' rel='noreferrer'>
                 (yt)
                </a>
                ⠀
                <a href='https://soundcloud.com/joannerobertson/sets/blue-car-4' target='_blank' rel='noreferrer'>
                 (sc)
                </a>
                ⠀
                <a href='https://www.youtube.com/watch?v=y1xSUVnun9I' target='_blank' rel='noreferrer'>
                (pusher w/ dean blunt + joanne robertson) <br/  >
                </a>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(1)
                            .typeString("<br>I came across this album after the <b>BLUE CAR</b> music video was recommended to me on <br> YouTube, forgetting that <b>JOANNE ROBERTSON</b> worked on <b>PUSHER</b> w/ <b>DEAN BLUNT</b>, which I’d <br> heard back in my 2nd year of university + after listening 2 this track, there’s no way<br> that I  couldn’t listen 2 the whole project. <br><br>")
                            .pauseFor(1000)
                            .typeString("The album is suuuper intimate. <br><br>")
                            .pauseFor(1000)
                            .typeString("It felt lyk I was sitting in the pews  of a church as she played it, wiv every line, guitar<br> riff + chord soaked in heavy reverb")
                            .pauseFor(1000)
                            .typeString(" (convolution reverb maybe? or just the large <br>hall/space she was in, probably). <br><br>")
                            .pauseFor(1000)
                            .typeString("IIRC, I read on the Bandcamp biography of the project that the purpose of each song<br> was 2 capture how she was feeling emotionally that day + this made a lot of sense <br>post-listen. ")
                            .pauseFor(1000)
                            .typeString("A lot of the lyrics r unintelligible which suits itself + its intentions. <br><br> ")
                            .pauseFor(1000)
                            .typeString("Further 2 the point of the intimacy of these songs, I noticed that there were a lot <br>“mistakes”,  stutters + blunders left in which adds 2 the closeness of it. <br><br>")
                            .pauseFor(1000)
                            .typeString("My favourite tracks r <b>BLUE CAR, BAND SIT TOGETHER, IF IT FEELS, CROSSROADS, LITTLE <br>TALKING DID U KNOW.</b> <br><br>")
                            .pauseFor(1000)
                            .changeDelay(200)
                            .typeString("++ <b>MIKI</b>")
                            .pauseFor(100000)
                            .typeString("<br> <br> hadouken <br>+ <br>https://soundcloud.com<br>/mmmiiikkkiii<br>/jim_legxacy_ghost_reconwav-ephemeral-bootleg<br>/s-WeuXiXdRvDY?si=af592560241b4557b04630cb5ddda688&utm<br>_source=clipboard&utm_medium=text&utm_campaign=social_sharing")
                            .start()
                    }}
                />
                
                
            </div>
            </div>
            </div>
}

{isTabletOrMobile &&
    <div>
    <div className='headerContainerMob' style={{position: 'absolute'}}>
                    <Header2/>
                </div>
        <div className= "deskContainerBlogMob">
        <div className="london" style={{position: 'absolute'}}>
        <Link to="/asgb">
                     [BACK TO WORKS] <br/  >
                </Link> 
                
                {/*
                [PREV]<div></div>
*/}
                [1] 30/5/23 + JOANNE ROBERTSON / BLUE CAR<div></div>
                
                {/*
                <Link to="/amerikaRev">
                 [NEXT] <br/  >
                 </Link> 
                */}
                
                <a href='https://open.spotify.com/album/4iSJMelhccY9eIzR7xWTgv' target='_blank' rel='noreferrer'>
                (spotify)
                </a>
                ⠀
                <a href='https://music.apple.com/us/album/blue-car/1669003169v' target='_blank' rel='noreferrer'>
                 (apple music)
                </a>
                ⠀
                <a href='https://www.youtube.com/watch?v=EaCCi1YTWQQ&list=OLAK5uy_kZERTfnMq_rZcx6nqU4rCRjO8PKwvnKmc' target='_blank' rel='noreferrer'>
                 (yt)
                </a>
                ⠀
                <a href='https://soundcloud.com/joannerobertson/sets/blue-car-4' target='_blank' rel='noreferrer'>
                 (sc)
                </a>
                ⠀
                <a href='https://www.youtube.com/watch?v=y1xSUVnun9I' target='_blank' rel='noreferrer'>
                (pusher w/ <br  />dean blunt + joanne robertson) <br/  >
                </a>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(1)
                            .typeString("<br>I came across this album after the <b>BLUE CAR</b> <br>music video was recommended to me on <br> YouTube, forgetting that <b>JOANNE ROBERTSON</b><br> worked on <b>PUSHER</b> w/ <b>DEAN BLUNT</b>, which I’d <br> heard back in my 2nd year of university + <br> after listening 2 this track,  there’s no way <br>  that I couldn’t listen 2 the whole project. <br><br>")
                            .pauseFor(1000)
                            .typeString("The album is suuuper intimate. <br><br>")
                            .pauseFor(1000)
                            .typeString("It felt lyk I was sitting in the pews of a <br>church as she played it, wiv every line, <br>guitar riff + chord soaked in heavy reverb<br>")
                            .pauseFor(1000)
                            .typeString("(convolution reverb maybe? or just the <br>large hall/space she was in, probably). <br><br>")
                            .pauseFor(1000)
                            .typeString("IIRC, I read on the Bandcamp biography of<br> the project that the purpose of each song <br>was 2 capture how she was feeling emotionally<br> that day + this made a lot of sense post<br>-listen. ")
                            .pauseFor(1000)
                            .typeString("A lot of the lyrics r unintelligible<br> which suits itself + its intentions. <br><br> ")
                            .pauseFor(1000)
                            .typeString("Further 2 the point of the intimacy of these <br>songs, I noticed that there were a lot <br>“mistakes”,  stutters + blunders left in which<br> adds 2 the closeness of it. <br><br>")
                            .pauseFor(1000)
                            .typeString("My favourite tracks r <b>BLUE CAR, BAND SIT <br>TOGETHER, IF IT FEELS, CROSSROADS, LITTLE <br>TALKING DID U KNOW.</b> <br><br>")
                            .pauseFor(1000)
                            .changeDelay(200)
                            .typeString("++ <b>MIKI</b>")
                            .pauseFor(1)
                            .typeString("<br> <br> hadouken <br>+ <br>https://soundcloud.com<br>/mmmiiikkkiii<br>/jim_legxacy_ghost_reconwav-ephemeral-<br>bootleg<br>/s-WeuXiXdRvDY?si=af592560241b4557b04630cb5<br>ddda688&utm<br>_source=clipboard&utm_medium=text&utm_<br>campaign=social_sharing")
                            .start()
                    }}
                />
                
                
            </div>
            </div>
            </div>
}
            </div>

    );
}

export default AppBlueCarRev;