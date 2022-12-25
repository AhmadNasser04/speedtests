import React, { useState } from 'react';
import networkIcon from '../../assets/network.png'
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { CircularProgress } from '@mui/material';

function NetworkTest() {
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [loading, setLoading] = useState(false)

    function handleButtonPress() {
      setLoading(true)
      setTimeout(fetchSpeeds, 1500)
    }

    function fetchSpeeds() {
      setLoading(true)
      // Measure download speed
      const timing = performance.getEntriesByType('navigation')[0];
      const downloadTime = timing.responseEnd - timing.requestStart;
      const downloadSize = timing.transferSize * 8; // convert bytes to bits
      const downloadSpeed = (downloadSize / downloadTime);
      setDownloadSpeed(downloadSpeed);

      // Measure upload speed
      const file = new File(['test'], 'test.txt', { type: 'text/plain' });
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/upload');
      const startTime = performance.now();
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const endTime = performance.now();
          const uploadTime = endTime - startTime;
          const uploadSize = event.loaded * 8; // convert bytes to bits
          const uploadSpeed = uploadSize / uploadTime;
          setUploadSpeed(uploadSpeed);
        }
      };
      xhr.send(file);

      setLoading(false)
    }

  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen bg-[#0B3295] space-y-10'>
        <div className='text-[#FFFFFF] text-4xl font-bold text-center'>Let's Test Your Network</div>
        <div className='bg-[#FFFFFF] w-[85vw] md:w-[60vw] xl:w-[50vw] h-auto rounded-lg p-10 shadow-xl'>
            <div className='flex flex-col items-center justify-center h-[100%] space-y-10'>
                <img src={networkIcon} alt='icon' />
                {loading ? <CircularProgress size={32} /> :
                <div className='flex gap-10'>
                    <h1 className='text-[#112240] font-semibold'>Download: {Math.round(downloadSpeed)} <span className='text-[#144FC4]'>Mbps</span></h1>
                    <h1 className='text-[#112240] font-semibold'>Upload: {Math.round(uploadSpeed)} <span className='text-[#144FC4]'>Mbps</span></h1>
                </div>}
                <div>
                    <button onClick={handleButtonPress} className='group flex items-center w-[300px] justify-center gap-2 text-[#FFFFFF] text-lg font-semibold border-[1px] bg-[#144FC4] border-[#144FC4] px-20 py-3 rounded cursor-pointer hover:bg-[#1368E7] hover:border-[#1368E7] transition-all ease-in duration-300'>
                        Start Test
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hidden group-hover:inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
                <div>
                    <Link to='/'>
                        <div className='w-14 h-14 bg-[#144FC4] rounded-full flex items-center justify-center cursor-pointer hover:translate-y-[-5%] hover:bg-[#1368E7] text-[#FFFFFF] shadow-xl transition-all'>
                            <AiFillHome className='w-8 h-8' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default NetworkTest;
