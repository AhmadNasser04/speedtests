import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import Button from '@mui/material/Button';

function CPSTest() {
  const [cps, setCps] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const buttonRef = useRef(null);

  function handleClick() {
    setClickCount(clickCount + 1);

    // Calculate CPS
    if (clickCount === 0) {
      // Start timer
      buttonRef.current.dataset.time = Date.now();
    } else {
      // Calculate CPS
      const elapsedTime = Date.now() - buttonRef.current.dataset.time;
      setCps((clickCount / elapsedTime) * 1000);
      setClickCount(0);
      buttonRef.current.dataset.time = null;
    }
  }

  return (
    <div className='bg-[#0B3295] w-screen- h-screen flex flex-col items-center justify-center space-y-5'>
      <div className='w-[80vw] lg:w-[50vw] h-[50vh] bg-white rounded-lg border-2 border-dashed border-[#FF7800]'>
        <Button variant='text' color='primary'  ref={buttonRef} onClick={handleClick} className='w-[80vw] lg:w-[50vw] h-[50vh] bg-white rounded-lg border-2 border-dashed border-[#FF7800]'>
          Click here
        </Button>
      </div>
      <div className='text-white font-bold text-2xl'><span className='text-[#FF7800]'>CPS:</span> {cps.toFixed(2)}</div>
        <div>
            <Link to='/'>
                <div className='w-14 h-14 bg-[#FF7800] rounded-full flex items-center justify-center cursor-pointer hover:translate-y-[-5%] hover:bg-[#FF9000] text-[#0B3295] shadow-xl transition-all'>
                    <AiFillHome className='w-8 h-8' />
                </div>
            </Link>
        </div>
    </div>
  );
}

export default CPSTest;
