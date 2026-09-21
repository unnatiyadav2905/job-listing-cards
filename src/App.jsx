import React from 'react'
import Card from './Components/Card'


const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://s3-alpha.figma.com/hub/file/2729744958/2a5758d6-4edb-4047-87bb-e6b94dbbbab0-cover.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 55,
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 70,
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 75,
    location: "Pune, India",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    companyName: "Netflix",
    datePosted: "6 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 110,
    location: "Remote (India)",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBu0cnozmDr454aSmHhedZltGVgU8fTfZwA&s",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Cloud Engineer (Azure)",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 80,
    location: "Noida, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    companyName: "Tesla",
    datePosted: "4 weeks ago",
    post: "Software Engineer (Automation)",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 95,
    location: "Chennai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4rUVWDMjjaWBg4Z-GPl7e2d3gXJ6QcpcKQ&s",
    companyName: "IBM",
    datePosted: "8 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Kolkata, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYxhoVGQgaG9RT-aQk4SsPdG_TtKgmUsjYw&s",
    companyName: "Oracle",
    datePosted: "10 weeks ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 85,
    location: "Gurgaon, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3039uEgnjhGl5XXEppO5MQlSoJcrtIGs9-g&s",
    companyName: "Intel",
    datePosted: "2 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Bengaluru, India",
  },
];

  return (
    <div className='parent'>

      {jobOpenings.map(function(elem,idx){

       return <div Key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2}/>
        </div>

      })}




      </div>

      
     
   
     
     
    
  )
}

export default App
