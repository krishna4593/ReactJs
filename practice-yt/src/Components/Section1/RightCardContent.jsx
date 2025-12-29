import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className=" absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl font-semibold">{props.id + 1}</h2>

        <div>
            <p className="text-lg leading-normal text-gray-100 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio exercitationem assumenda voluptas doloribus eaque cupiditate!</p>

            <div className="flex justify-between">
                <button className="bg-blue-600 text-white font-semibold px-8 py-2 rounded-full ">{props.tag}</button>
                <button className="bg-blue-600 text-white font-semibold px-3 py-2 rounded-full "><i className="ri-arrow-right-line"></i></button>
            </div>

        </div>
      </div>
  )
}

export default RightCardContent
