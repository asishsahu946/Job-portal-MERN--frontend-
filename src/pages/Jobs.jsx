import React from 'react'
import JobFilter from '../components/JobFilter'

function Jobs() {
  return (
    <div>
      <div className='bg-black py-10 text-white text-center'> 
        <h1 className='text-3xl font-bold'>Jobs</h1>
      </div>
     <JobFilter/>
    </div>
  )
}

export default Jobs