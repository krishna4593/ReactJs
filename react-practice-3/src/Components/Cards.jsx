import React from 'react'

const Cards = (props) => {
  return (
    <div className="w-full sm:w-70 md:w-[320px] bg-white rounded-lg shadow-lg p-3">
      <div className="relative h-36  rounded-[15px]  ">
        <img src={props.cover} alt="" className="w-full h-full object-cover rounded-[15px]"/>

        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2  h-20 w-20 rounded-full border-4 border-white overflow-hidden">
         
            <img
              src={props.avatar}
              alt="profile"
              className="w-full h-full rounded-full object-cover"
            />
         
        </div>
      </div>
        <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold">{props.name}</h2>
            <p className="text-gray-500">{props.role}</p>
        </div>

         <div className="flex justify-around mt-6 px-4 text-center bg-zinc-100  rounded-lg py-1">
        <div>
          <p className="font-semibold text-gray-800">{props.likes}</p>
          <p className="text-xs text-gray-500">Likes</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800">{props.posts}</p>
          <p className="text-xs text-gray-500">Posts</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800">{props.views}</p>
          <p className="text-xs text-gray-500">Views</p>
        </div>
      </div>

       <div className="flex justify-center gap-4 mt-6 mb-6 text-gray-500">
        <span className="text-lg ri-twitter-x-line"></span>
        <span className="text-lg ri-instagram-line"></span>
        <span className="text-lg ri-linkedin-line"></span>
      </div>
    </div>
  )
}

export default Cards
