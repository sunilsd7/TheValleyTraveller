import React from 'react'

const Herobase = () => {
  return (
    <div className=' relative left-10 right-10 '>
        <div className=' items-center grid justify-around  bg-gray-100'>
            <form action=" " className='grid grid-cols-5  items-center py-8 gap-8'>
                <div className='grid grid-rows-1  '>
                <label htmlFor="Duration" >Duration</label>
                <input type="text" className='border-2 rounded-lg' />
                </div>
                <div className='grid grid-rows-1 '>
                <label htmlFor="" >Destination</label>
                <input type="text" className='border-2 rounded-lg' /></div>
                <div className='grid grid-rows-1 '>
                <label htmlFor="" >Date</label>
                <input type="date" className='border-2 rounded-lg' /></div>
                <div className='grid grid-rows-1'>
                <label htmlFor="">Person</label>
                <input type="text" className='border-2 rounded-lg' /></div>

                <div className='item-center mt-5'>
                    <button className='bg-red-500 rounded-full px-5 text-white text-xl'>Search</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Herobase
