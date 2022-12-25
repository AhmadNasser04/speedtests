import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

export default function ReactionTest() {
  // State to track the elapsed time
  const [elapsedTime, setElapsedTime] = useState(0);
  // State to track the start time
  const [startTime, setStartTime] = useState(null);
  // State to track whether the box is green or not
  const [isGreen, setIsGreen] = useState(false);


  const startTest = () => {
    // Generate a random delay between 2 and 8 seconds
    const delay = Math.random() * 6000 + 2000

    // Set the green box to be visible after the delay and start the timer
    const timeoutId = setTimeout(() => {
        setStartTime(Date.now());
        setIsGreen(true);
    }, delay);
    
    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }

  function handleTryAgainClick() {
    // Reset the start time, elapsed time, and green box visibility
    setStartTime(null);
    setElapsedTime(0);
    setIsGreen(false);
    startTest()
  }

  function handleClick() {
    // Calculate the elapsed time
    const elapsed = Date.now() - startTime;
    setElapsedTime(elapsed);
    // Reset the start time and the green box visibility
    setStartTime(null);
    setIsGreen(false);
  }

  return (
    <div className='bg-[#0B3295] w-screen h-screen flex flex-col items-center justify-center space-y-5'>
      <div className='text-white font-bold text-xl'>{elapsedTime ? `Your reaction time was ${elapsedTime}ms` : 'Click when the white area turns orange'}</div>
      <div
        className={`w-[80vw] lg:w-[50vw] h-[50vh] bg-white rounded-lg border-2 cursor-pointer border-dashed border-[#FF7800] ${isGreen && 'bg-[#FF7800]'} `}
        style={{
            pointerEvents: isGreen ? 'auto' : 'none',
        }}
        onClick={handleClick}
      />
      <button onClick={handleTryAgainClick} className='text-[#FFFFFF] font-semibold border-[1px] border-[#FF7800] px-5 py-2 rounded cursor-pointer hover:bg-[#FF9000] hover:border-[#FF9000] transition-all duration-300'>Start</button>
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
