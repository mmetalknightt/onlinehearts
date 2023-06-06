import React from 'react';
import Typewriter from "typewriter-effect";
import {Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';

function AppAmerikaRev(){
    return (
        <div>
        <div className= "deskContainerBlog">
        <div className="london" style={{position: 'fixed'}}>

                <Link to="/blueCarRev">
                [PREV]
                </Link>

                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀[2] 30/5/23 + FRANZ KAFKA / AMERIKA⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

                <Link to="/diaryEntry1">
                 [NEXT] <br/  >
                </Link>
                ⠀
                <a href='https://en.wikipedia.org/wiki/Amerika_(novel)' target='_blank' rel='noreferrer'>
                (amerika wiki)
                </a>
                ⠀
                <a href='https://en.wikipedia.org/wiki/Franz_Kafka' target='_blank' rel='noreferrer'>
                 (kafka wiki)
                </a>
                ⠀
                <a href='https://wastestorelondon.com/' target='_blank' rel='noreferrer'>
                 (waste store, hackney road)
                </a>
                ⠀
                <a href='http://sebrightarms.com/' target='_blank' rel='noreferrer'>
                 (sebright arms, coate street) 
                </a>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            /*}
                            .typeString("<br>I came across this album after the <b>BLUE CAR</b> music video was recommended to me on <br> YouTube, forgetting that <b>JOANNE ROBERTSON</b> worked on <b>PUSHER</b> w/ <b>DEAN BLUNT</b>, which I’d <br> heard back in my 2nd year of university + after listening 2 this track, there’s no way<br> that I  couldn’t listen 2 the whole project. <br><br>")
                            .pauseFor(1000)
                            .typeString("The album is suuuper intimate. <br><br>")
                            .pauseFor(1000)
                            
                            .typeString("It felt lyk I was sitting in the pews of a church as she played it, wiv every line, guitar <br>riff + chord soaked in heavy reverb ")
                            .pauseFor(1000)
                            .typeString("(convolution reverb maybe? or just the large <br>hall/space she was in, probably). <br><br>")
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
                            .typeString("++ <b>Elisha</b>")
                            .pauseFor(100000)
                            */
                            .changeDelay(1000000)
                            .typeString("<br> <br> hadouken <br>+ <br>https://soundcloud.com<br>/mmmiiikkkiii<br>/jim_legxacy_ghost_reconwav-ephemeral-bootleg<br>/s-WeuXiXdRvDY?si=af592560241b4557b04630cb5ddda688&utm<br>_source=clipboard&utm_medium=text&utm_campaign=social_sharing")
                            .start()
                    
                            
                    }}
                />
            </div>
            </div>
            </div>

        
    );
}

export default AppAmerikaRev;