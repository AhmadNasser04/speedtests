import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCheck } from 'react-icons/ai'
import { GiSpeedometer } from 'react-icons/gi'

function Hero() {
  return (
    <div className='w-screen h-[80vh] bg-[#0B3295] flex flex-col space-y-[15vh]'>
        {/* Nav Section */}
        <div className='flex justify-evenly items-center w-screen p-5'>
            {/* Logo */}
            <Link to='/'>
                <div className='font-bold text-3xl cursor-pointer flex items-center justify-center gap-3'>
                    <h1 className='text-[#FF7800] hidden md:inline-block'>Speed <span className='text-[#FFFFFF]'>Tests</span></h1>
                    <GiSpeedometer className='text-[#FF7800] h-10 w-10' />
                </div>
            </Link>
            {/* Navigation */}
            <div className='flex items-center justify-center text-center space-x-5'>
                <a href='https://ahmadnasser.net/'>
                    <div className='text-[#FFFFFF] font-semibold cursor-pointer hover:text-[#FF9000] transition-all'>
                        Portfolio
                    </div>
                </a>
                <Link to='/suggestion'>
                    <div className='text-[#FFFFFF] font-semibold border-[1px] border-[#FF7800] px-5 py-2 rounded cursor-pointer hover:bg-[#FF9000] hover:border-[#FF9000] transition-all duration-300'>
                        Make A Suggestion
                    </div>
                </Link>
            </div>
        </div>

        {/* Main Section */}
        <div className='flex flex-col items-center justify-center text-center space-y-10 w-[100%]'>
            {/* Main Text */}
            <div className='space-y-10'>
                <h1 className='text-3xl md:text-5xl text-[#FFFFFF] font-bold'>All Of The World’s Speed Tests In One Place</h1>
                <div className='items-center justify-center text-center flex gap-8 px-5'>
                    <div className='flex items-center justify-center gap-3'>
                        <AiOutlineCheck className='text-[#FF7800] text-2xl hidden md:inline-block' />
                        <h1 className='text-[#FFFFFF] text-2xl'><span className='font-bold'>Easy</span> To Use</h1>
                    </div>
                    <div className='flex items-center justify-center gap-3'>
                        <AiOutlineCheck className='text-[#FF7800] text-2xl hidden md:inline-block' />
                        <h1 className='text-[#FFFFFF] text-2xl'><span className='font-bold'>Super</span> Secure</h1>
                    </div>
                    <div className='flex items-center justify-center gap-3'>
                        <AiOutlineCheck className='text-[#FF7800] text-2xl hidden md:inline-block' />
                        <h1 className='text-[#FFFFFF] text-2xl'><span className='font-bold'>Frequently</span> Updated</h1>
                    </div>
                </div>
            </div>
            {/* Main Button */}
            <div className='space-y-2 md:space-y-6 items-center flex flex-col justify-center'>
                <Link to='#tests'>
                    <div className='group flex items-center w-[300px] justify-center gap-2 text-[#FFFFFF] text-lg font-semibold border-[1px] bg-[#FF7800] border-[#FF7800] px-20 py-3 rounded cursor-pointer hover:bg-[#FF9000] hover:border-[#FF9000] transition-all ease-in duration-300'>
                        Let's Start
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hidden group-hover:inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                </Link>
                {/* Credit */}
                <div>
                    <h1 className='text-[#FFFFFF] text-lg'>Proudly Made By <span className='font-bold'>Ahmad Nasser</span></h1>
                </div>
            </div>
            {/* Arrow Icon */}
            <div className='animate-bounce absolute bottom-[20vh] md:bottom-[25vh] hidden md:inline-block'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
    </div>
  )
}

export default Hero