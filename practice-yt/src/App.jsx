import React from 'react'
import Section1 from './Components/Section1/Section1'


const App = () => {
  const users =[
    {
      img:'https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag:'satisfied',
      intro:''

    },
     {
      img:'https://plus.unsplash.com/premium_photo-1661387711615-fac8cbf8b02a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDB8fDB8fHww',
      tag:'Underserved',
      intro:''

    },
     {
      img:'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGltYWdlfGVufDB8fDB8fHww',
      tag:'Underbanked',
      intro:''

    },
    {
      img:'https://media.istockphoto.com/id/2170109527/photo/successful-businesswoman-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=vlW6eEj-soStU8VxEKZJJKXiL_ydTYgE_nwv_DrhMMI=',
      tag:'Average',
      intro:''
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      
    </div>
  )
}

export default App
