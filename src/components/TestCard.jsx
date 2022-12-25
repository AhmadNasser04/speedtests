import React from 'react'
import { Link } from 'react-router-dom'

function TestCard({ tag, desc, icon, link }) {
  return (
    <div className='bg-white w-[85vw] md:w-[45vw] xl:w-[20vw] h-[450px] rounded-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative'>
        {/* ICON */}
        <div className='flex justify-center'>
            <div className='absolute top-8'>
                <img src={icon} alt='icon' />
            </div>
            {/* Tag Line */}
            <h1 className='absolute top-36 text-[#112240] text-2xl font-semibold'>{tag}</h1>
            {/* Description */}
            <h1 className='absolute top-48 text-center text-[#616D8E] px-5'>{desc}</h1>
            {/* Button */}
            <div className='absolute bottom-10 my-auto mx-0'>
                <Link to={link}>
                    <div className='bg-[#144FC4] group hover:bg-[#1368E7] w-[200px] h-[40px] text-center px-8 py-2 rounded cursor-pointer text-white font-bold'>
                        Let's Start
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hidden group-hover:inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default TestCard