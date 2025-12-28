import React from 'react'
import Card from './Components/Card'

const App = () => {
 const jobs = [
  {
    brandLogo: "https://imgs.search.brave.com/oaJk_bHyL_24Ft7K_bYT73iWkpRRzFg7c4fbeA2ndCw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzEwL21ldGEtbG9n/by0wLnBuZw",
    companyName: "Meta",
    jobOpeningDate: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    jobOpeningDate: "2 weeks ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/rvQqR7akSxN_njsnKGJTAfTiIX366OoCuygWiUj0__8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE2Lzg1LzczLzIw/LzM2MF9GXzE2ODU3/MzIwNzZfVWQ4R05E/SU5aenBGMUR6WkFi/VVpkZldQbnBOVjBt/SjMuanBn",
    companyName: "Amazon",
    jobOpeningDate: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/bZPY5KFGckvtEdvVeXVU518z-eAJvyopsZh3m6v-_Zc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/ODYxLzY0Ny9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1iYWNrZ3JvdW5k/LWZyZWUtcG5nLnBu/Zw",
    companyName: "Google",
    jobOpeningDate: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/4brmqBpMEtRWQPmiKq1F9Xfyv4Y4h59sY7Ttme8N1MA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdmLzI5/L2Y3LzdmMjlmNzJm/YWQyZWFiMmU3YjBi/ZGE3NWViNDAwODNm/LmpwZw",
    companyName: "Apple",
    jobOpeningDate: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/UuN0cpC3MWmwGVL3aUoU3SzLcdk9Qkj92pZlrL3eUIs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8xNzIv/MzQzL0hELXdhbGxw/YXBlci1uZXRmbGl4/LWxvZ28tYmxhY2st/bG9nby1taW5pbWFs/LW5ldGZsaXguanBn",
    companyName: "Netflix",
    jobOpeningDate: "4 days ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/1DamicmryBv61bYz_nDeyCY2u21kd8c54w8qkb2cLgA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jcnlz/dGFscG5nLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/NS9pYm0tbG9nby5w/bmc",
    companyName: "IBM",
    jobOpeningDate: "10 weeks ago",
    post: "Cloud Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/oBjtOWUUU1NHHcujyXV16MFwnzkftX2h5bniSBv55PQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvT3Jh/Y2xlLUxvZ28tUE5H/LUltYWdlLnBuZw",
    companyName: "Oracle",
    jobOpeningDate: "6 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/Q0hfc946iRxX1rVFX7i31qMaPZ8yUgRxK69PGOjBi48/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/MTE4LzU0NS9zbWFs/bC9hZG9iZS1sb2dv/LXN0YW5kYXJkLWlj/b24tYXBwLWxvZ28t/ZWRpdGFibGUtdHJh/bnNwYXJlbnQtYmFj/a2dyb3VuZC1wcmVt/aXVtLXNvY2lhbC1t/ZWRpYS1kZXNpZ24t/Zm9yLWRpZ2l0YWwt/ZG93bmxvYWQtZnJl/ZS1wbmcucG5n",
    companyName: "Adobe",
    jobOpeningDate: "2 months ago",
    post: "UX Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/F5OTIiXQsj1Oyc_QZ1Pcf1XFN1HfraeROF6QZqwmMHw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9UZXNsYSxf/SW5jLi9UZXNsYSxf/SW5jLi1Mb2dvLndp/bmUuc3Zn",
    companyName: "Tesla",
    jobOpeningDate: "8 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "Pune, India"
  }
];


  return (
    <div className='min-h-[100vh] w-[100vw] bg-black p-[30px] flex gap-6 flex-wrap '>
     
      {jobs.map((job, index) => (
        <Card 
          key={index}
          brandLogo={job.brandLogo}
          companyName={job.companyName}
          jobOpeningDate={job.jobOpeningDate}
          post={job.post}
          tag1={job.tag1}
          tag2={job.tag2}
          pay={job.pay}
          location={job.location}
        />
      ))}
      
    </div>
  )
}

export default App
