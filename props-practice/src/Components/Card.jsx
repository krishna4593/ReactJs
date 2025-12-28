import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="w-[270px]  bg-white rounded-[30px] p-4">

        <div className='flex justify-between items-center '>
          <img
          className="h-[50px] w-[50px] rounded-full  border-2 border-gray-300 object-cover bg-center "
          src={props.brandLogo} alt={props.companyName} />
          <button className='text-black bg-gray-200 px-2 rounded-md '>Save <span className="ri-bookmark-line"></span></button>
        </div>

        <div className='mt-4'>
           <div className='flex gap-3 items-center' >
            <h1 className='text-black font-semibold'>{props. companyName}   </h1>
           <p className='text-sm text-gray-400 '>{props.jobOpeningDate}</p>
           </div>
          <h1 className="text-lg font-semibold">{props.post}</h1>
          <div className='flex gap-2 mt-2'>
            <p className="text-black bg-gray-200 px-2 rounded-md">{props.tag1}</p>
            <p className="text-black bg-gray-200 px-2 rounded-md">{props.tag2}</p>
          </div>

        </div>

        <div className="mt-20 border-t-1 pt-4 border-gray-200 flex justify-between items-center">
          <div>
            <h1 className='text-black font-semibold'>   {props.pay}</h1>
            <p className='text-gray-400 text-[15px]'>{props.location}</p>
          </div>
          <button className='text-white bg-blue-600 px-2 py-2 rounded-md '>Apply Now</button>

        </div>

      </div>
    </div>
  )
}

export default Card
