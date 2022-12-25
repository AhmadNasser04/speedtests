import React from 'react'
import emailjs from 'emailjs-com';
import { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsCheckCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Suggestion() {

  const [loading, setLoading] = useState(false);

  function sendEmail(e) {
        setLoading(true)
        e.preventDefault();
        emailjs.sendForm('service_cjlki4h', 'template_d6yhvya', e.target, 'IWAlqGEuPzRGx1I9-').then(res=> {
            setTimeout(setLoading(false), 1500)
        }).catch(err=> alert('Error sending email.'))
    }

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen space-y-10 bg-[#0B3295]'>
        {/* Title */}
        <h1 className='text-4xl text-[#FFFFFF] text-center font-bold'>Write Up Your Suggestion</h1>
        {/* Form */}
        <form onSubmit={sendEmail} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input name='name' placeholder='Name *' className='contactInput w-[40vw] max-w-lg' type="text" required/>
                    <input name='email' placeholder='Email *' className='contactInput w-[40vw] max-w-lg' type="email" required/>
                </div>
                <input name='subject' placeholder='Subject *' className='contactInput' type='text' required/>
                <textarea name='message' placeholder='Suggestion *' className='contactInput' required/>
                {!loading ? 
                  <input type='submit' value='Submit' className='hover:bg-[#FF7800]/60 hover:border-none border bg-[#FF7800] border-[#FF7800] rounded-lg h-12 text-white font-semibold cursor-pointer transition-all' /> 
                  :
                  <div className='w-[100%] items-center justify-center flex'>
                    <BsCheckCircle className='text-[#FF7800] w-12 h-12' />
                  </div>
                }
        </form>
        {/* Back Button */}
        <div>
          <Link to='/'>
            <div className='w-14 h-14 bg-[#FF7800] rounded-full flex items-center justify-center cursor-pointer hover:translate-y-[-5%] hover:bg-[#FF9000] text-[#0B3295] shadow-xl transition-all'>
              <AiFillHome className='w-8 h-8' />
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Suggestion