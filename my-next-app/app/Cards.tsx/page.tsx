'use client'
import React from 'react'
import job from "./jobs.json"
import { useRouter } from 'next/navigation';
import DropDown from "./Heading"

interface JobDescription {
    title: string;
    description: string;
    responsibilities: string[];
    ideal_candidate: {
      age: string;
    };
    id :string;
    when_where: string;
    about: {
      posted_on: string;
      deadline: string;
      location: string;
      start_date: string;
      end_date: string;
      categories: string[];
      required_skills: string[];
    };
    company: string;
    image: string;
  }

const UserPage =  () => {
    const users : JobDescription[]  = job.job_postings
    const route = useRouter()

    return (
        <>
        
        <div className='m-10 flex justify-center'>
  <div className="w-[75%]">
    {users.map((user) => (
      <div
        onClick={() => route.push(`/description?id=${user.id}`)}
        className="p-[24px] min-h-[266px] flex align-middle gap-3 hover:bg-gray-100  bg-white max-w-3xl  justify-items-center pt-8 pb-4 px-6 my-8
    rounded-3xl drop-shadow-md border border-gray-300"
      >
        <img className='p-2 w-[66px] h-[59px]' src={user.image} alt="" />
        <div>
          <h1 className='font-bold pb-1 bold text-3xl'>{user.title} </h1>
          <p className='text-gray-400  font-serif text-md pb-3 '>{user.company}, {user.about.location}</p>
          <p className='text-[20px]  text-gray-600 font-extralight'>{user.description}</p>
          <div className='flex gap-2 mt-2'>
            <button className='m-2 p-2 w-auto bg-green-200 text-green-500 rounded-3xl'>inPerson</button>
            <button className='m-2 p-2 w-32 bg-yellow-200 text-yellow-500 rounded-3xl '>Education</button>
            <button className='m-2 p-2 w-14 bg-blue-200 text-blue-500 rounded-3xl '> IT</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        </>
    )
}

export default UserPage