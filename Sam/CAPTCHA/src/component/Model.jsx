import React, { useState } from 'react'
import './Model.css'
import { IoThumbsUp } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";
function Model({click}) {  

  const [showCheckmark, setShowCheckmark] = useState(false);

  React.useEffect(() => {
    if (click === 'happy') {
      const timer = setTimeout(() => {
        setShowCheckmark(true);
      }, 200); 
      return () => clearTimeout(timer);
    } else {
      setShowCheckmark(false);
    }
  }, [click]);

  return (
    <div className="container">
      <div className='sam'>
        <div className='hair'></div>
        <div className='ear_left'></div>
        <div className='ear_right'></div>
        <div className='head'>
          {click === 'sad' ? <div className='eyebrow_leftsad'></div> : <div className='eyebrow_left'></div>}
          {click === 'sad' ? <div className='eyebrow_rightsad'></div> :<div className='eyebrow_right'></div>}
          <div className='eye_left'>
            <div className='pupil_left'></div>
            {click === 'sad' && <div className='tears'></div>}
          </div>
          <div className='eye_right'>
            <div className='pupil_right'></div>
            {click === 'sad' && <div className='tears'></div>}
          </div>
          <div className='nose'></div>
          <div className='mustache'></div>
          {click === 'sad' ? <div className='mouthupset'></div> : <div className='mouthhappy'></div>}
        </div>
        <div className='shirt'>
          {click === 'happy' && (
            <div className='hand_right'>
              <div className='thumb_right'><IoThumbsUp size={18} /></div>
              {showCheckmark && <div className='checkmark'><IoIosCheckmark size={35} /></div>}
            </div>
          )}
        </div>
        <div className='pants'></div>
      </div>
    </div>
  );
}

export default Model
