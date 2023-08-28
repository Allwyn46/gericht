import React, { useState } from 'react';
import './Intro.css';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants';

const Intro = () => {

   //USING USE REF

   const vidRef = React.useRef()

   //USING USE STATE

   const [playVideo, setplayVideo] = useState(false);

   //FUNCTION TO PAUSE AND PLAY

   const handleVideo = () => {
      setplayVideo((prevPlayVideo) => !prevPlayVideo)

      if (playVideo) {
         vidRef.current.pause();
      } else {
         vidRef.current.play();
      }
   }

   return (
      <div className='app__video'>
         <video src={meal} ref={vidRef} type="video/mp4" loop controls={false} muted />
         <div className='app__video-overlay flex__center'>
            <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>

               {/* IF ELSE STATEMENT TO SHOW PAUSE OR PLAY BUTTON */}

               {playVideo
                  ? (<BsPauseFill color='#fff' fontSize={30} />)
                  : <BsFillPlayFill color='#fff' fontSize={30} />}
            </div>
         </div>
      </div>
   )
}

export default Intro