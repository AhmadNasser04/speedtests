import React from 'react'
import TestCard from '../../components/TestCard'
import networkIcon from '../../assets/network.png'
import wpmIcon from '../../assets/wpm.png'
import cpsIcon from '../../assets/cps.png'
import reactionIcon from '../../assets/reaction.png'

function Tests() {
  return (
    <div className='flex items-center justify-center flex-col space-y-10 bg-[#F6F6F6]'>
        {/* Title */}
        <h1 className='text-[#112240] text-5xl font-bold text-center'>Choose A Speed Test</h1>

        {/* Tests */}
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-10 pb-10'>
            <TestCard tag='Test Your Network' desc="This is a test for your internet speed, both your download and upload speeds will be put to the test. Let's see what you get!" icon={networkIcon} link='/network' />
            <TestCard tag='Test Your Typing' desc="This is a test to see how fast you can move your fingers on that keyboard of yours, Let's see what WPM you get. My best is 101!" icon={wpmIcon} link='/wpm' />
            <TestCard tag='Test Your Clicking' desc="Ever wondered how fast you could click your mouse? No? Well, mightaswell test anyway. This is a test to see how fast you can click!" icon={cpsIcon} link='/cps' />
            <TestCard tag='Test Your Reactions' desc="Want to brag to your friends about how fast your reaction time is? Well prove it to them by doing this test, make them do it too to see just how much faster you are!" icon={reactionIcon} link='/reaction' />
        </div>
    </div>
  )
}

export default Tests