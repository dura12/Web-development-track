'use client'
import React, { useState,useEffect } from 'react'
import { FaRegCheckCircle } from 'react-icons/fa';

import fetchedData from "../Cards.tsx/jobs.json";

interface JobDescription {
  id : string;
    title: string;
    description: string;
    responsibilities: string[];
    ideal_candidate: {
      age: string;
      gender: string;
      traits: string[];
    };
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

const Description = () => {
    
    const [user,setFilteredData] = useState<JobDescription>()
    useEffect(() => {
        const queryId = new URLSearchParams(window.location.search).get('id');
        if (queryId) {
          const job = fetchedData.job_postings.find(job => job.id.toString() === queryId);
          console.log(job);
          if (job) {
            setFilteredData(job);
          } else {
            console.error(`Job with ID ${queryId} not found`);
          }
        }
      }, []);
    return (
        <div className=' flex gap-6 m-20'>
          {user?
          
            <div className="flex gap-4">
                    <div className="p-6 w-[100%] h-auto grid grid-cols-[3fr_1fr] gap-2  mb-6  text-[18px]  mr-15 ml-115 ">
                        <div className="mt-0 m-5 text-md space-y-6 block">
                        <h1 className='font-serif ml-0 m-3 font-bold pb-1 bold text-3xl'>Description</h1>
                        <p>{user.description}</p>
                            <h1 className='font-serif ml-0 m-2 font-bold pb-1 bold text-3xl'>Responsibility</h1>
                            <ul className="space-y-3 list-inside">
                              {user.responsibilities.map((item, index) => (
                                <li key={index} className="flex items-center">
                                  <FaRegCheckCircle color="green" className="mr-2" />
                                  {item}
                                </li>
                              ))}
                            </ul> 
                          
                            <div className=""> 
                        <h1 className='font-serif ml-0 m-2 font-bold pb-1 bold text-3xl' >Ideal Candidate we want</h1>
                          <ul className="list-disc list-inside space-y-3">
                            <li>{user.ideal_candidate.age}  {user.ideal_candidate.gender} {user.title}</li>
                          {user.ideal_candidate.traits.map((item ,index) => (<li className='w-auto list-circle font-serif'>{item}</li>))}
                          </ul>
                        </div>
                        <div className=" ml-0 m-10">
                        <h1 className='font-serif ml-0 m-3 font-bold pb-1 bold text-3xl'>When and Where</h1>
      
                              <div className="flex ">
                                  < img src = "icons/icon4.png " className='w-[44px] h-[44px]'/>
                                  <p className="text-xl pt-1 ">{user.when_where}</p>
                                </div>
                                
                    
              
                        </div>
                        
                        </div>
                        <div className=" w-auto   rounded-md">
                        <h1 className='font-serif m-2 ml-0 font-bold pb-1  bold text-3xl'> About</h1>

                              <div className='flex flex-col gap-[16px]'>
                                <div className='flex min-w-[142px] min-h-[52px] gap-[16px] '>
                                    <img src ="icons/icon1.png" className='w-[44px] h-[54px]' />
                                  <div>
                                  <h3 className="text-lg text-gray-400 font-serif">Posted On</h3>
                                  <p className="font-bold text-xl ">{user.about.posted_on}</p>
                                  </div>
                                </div>
                                <div className='flex min-w-[142px] min-h-[52px] gap-[16px] drop-shadow-2xl'>
                                <img src ="icons/icon2.png" className='w-[44px] h-[54px]'/>
                                  <div>
                                  <h3 className="text-lg text-gray-400 font-serif">Deadline</h3>
                                  <p className="font-bold text-xl ">{user.about.deadline}</p>
                                  </div>
                                </div>
                                <div className='flex min-w-[142px] min-h-[52px] gap-[16px] drop-shadow-2xl'>
                                <img src ="icons/icon3.png" className='w-[44px] h-[54px]'/>
                                  <div>
                                  <h3 className="text-lg text-gray-400 font-serif">Start Date</h3>
                                  <p className="font-bold text-xl ">{user.about.start_date}</p>
                                  </div>
                                  </div>
                                <div className='flex min-w-[142px] min-h-[52px] gap-[16px] drop-shadow-2xl'>
                                <img src ="icons/icon4.png" className='w-[44px] h-[54px]'/>
                                  <div>
                                  <h3 className="text-lg text-gray-400 font-serif">End Date</h3>
                                  <p className="font-bold text-xl ">{user.about.end_date}</p>
                                  </div>
                                  </div>
                                <div className='flex min-w-[142px] min-h-[52px] gap-[16px] drop-shadow-2xl'>
                                <img src ="icons/icon5.png" className='w-[44px] h-[54px]'/>
                                  <div>
                                  <h3 className="text-lg text-gray-400 font-serif">Location</h3>
                                  <p className="font-bold text-xl ">{user.about.location}</p>
                                  </div>
                                  </div>
                              </div>
                                
                              <hr className="border-gray-400  border-dashed  drop-shadow-lg my-4 w-48"></hr>
                
                            <div className="mt-3">
                              <h1 className='font-serif ml-0 m-2 font-bold pb-1 bold text-3xl' >Catagories</h1>
                              <div className="flex">
                              <p className=' m-2 p-1 w-auto text-sm bg-yellow-200 text-yellow-500 rounded-3xl '>{user.about.categories[0]}</p>
                              <p className='m-2 p-1  text-sm w-auto bg-green-200  text-green-500 rounded-3xl'>{user.about.categories[1]}</p>
                              </div>
                            </div>
                            <hr className="border-gray-400 border-dashed drop-shadow-lg my-4 w-48"></hr>
                        <div className=""> 
                        <h1 className='font-serif m-2  font-bold pb-1 bold text-3xl' >Required Skills</h1>
                          <div className="flex">
                          {user.about.required_skills.map((item ,index) => (<p className='m-2  p-1 text-sm w-auto h-10 bg-gray-200  text-blue-500 rounded-3xl'>{item}</p>))}
                          </div>
                        </div>

                       
                        
                            
                        </div>
                    </div>
            </div>:""
        }
        </div>
    )
}

export default Description