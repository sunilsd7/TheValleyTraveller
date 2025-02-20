import React from 'react'

const Herobase = () => {
  return (
    <div className='  '>
        <div className=' items-center grid justify-around  bg-gray-100 px-10'>
            <form action=" " className='grid grid-cols-5  items-center py-8 gap-8'>
                <div className='grid grid-rows-1 w-30  '>
                <label htmlFor="Duration" >Duration</label>
                <input type="text" className='border-2 rounded-lg' />
                </div>
                <div className='grid grid-rows-1 w-30'>
                <label htmlFor="" >Destination</label>
                <input type="text" className='border-2 rounded-lg' /></div>
                <div className='grid grid-rows-1 w-50'>
                <label htmlFor="" >Date</label>
                <input type="date" className='border-2 rounded-lg' /></div>
                <div className='grid grid-rows-1 w-30'>
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
