import React from 'react'
import { GiSpeedometer } from 'react-icons/gi'

function Footer() {
  return (
    <div className='bg-[#0B3295] h-[450px] flex flex-col md:flex-row justify-evenly items-center overflow-hidden'>
        <div className='flex flex-col justify-center'>
            <div className='font-bold text-3xl cursor-pointer items-center justify-center md:justify-start flex gap-3 space-y-3'>
                <h1 className='text-[#FF7800]'>Speed <span className='text-[#FFFFFF]'>Tests</span></h1>
                <GiSpeedometer className='text-[#FF7800] h-10 w-10' />
            </div>
            <div className='text-[#D0E2F5] w-[450px] text-center p-5 md:text-left md:p-0'>I, Ahmad Nasser, proudly always try to go above and beyond with every project I make, and I'm very happy with this little side project. Enjoy testing your speed!</div>
        </div>
        <div className='flex gap-16'>
            <div className='flex flex-col gap-5'>
                <div>
                    <h1 className='text-white font-bold'>Speed Tests</h1>
                </div>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[#D0E2F5] hover:text-[#FF9000] cursor-pointer transition-all'>Network Test</h1>
                    <h1 className='text-[#D0E2F5] hover:text-[#FF9000] cursor-pointer transition-all'>Typing Test</h1>
                    <h1 className='text-[#D0E2F5] hover:text-[#FF9000] cursor-pointer transition-all'>Clicking Test</h1>
                    <h1 className='text-[#D0E2F5] hover:text-[#FF9000] cursor-pointer transition-all'>Reaction Test</h1>
                    <h1 className='text-[#D0E2F5] hover:text-[#FF9000] cursor-pointer transition-all'>Suggestion</h1>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <div>
                    <h1 className='text-white font-bold'>Ahmad</h1>
                </div>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[#D0E2F5] hover:text-[#FF9000] cursor-pointer transition-all'>Portfolio</h1>
                    <h1 className='text-[#D0E2F5] hover:text-[#FF9000] cursor-pointer transition-all'>About</h1>
                    <h1 className='text-[#D0E2F5] hover:text-[#FF9000] cursor-pointer transition-all'>Contact</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer