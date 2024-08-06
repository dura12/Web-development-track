'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {JobPostingsProps , JobPost} from '../jobs'
const UserPage = () => {
  const [users, setJobs] = useState<JobPost[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('https://akil-backend.onrender.com/opportunities/search');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data: JobPostingsProps = await res.json();

        setJobs(data.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError((err as Error).message);
      }
    };

    fetchJobs();
  }, ["error"]);

  if (error) return <p>Error: {error}</p>;
  if (!users) return <p>Loading...</p>;

  return (
    <div className='m-10 flex justify-center'>
      <div className="w-[75%]">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => router.push(`/description?id=${user.id}`)}
            className="p-[24px] min-h-[266px] flex  gap-3 hover:bg-gray-100 bg-white max-w-[75] justify-items-center pt-8 pb-4 px-6 my-8 rounded-3xl drop-shadow-md border border-gray-300"
          >
            <img className='p-2 w-[70px] h-[70px]' src={user.logoUrl} />
            <div>
              <h1 className='font-bold pb-1 text-3xl'>{user.title}</h1>
              <p className='text-gray-400 font-serif text-md pb-3'>{user.orgName}, {user.location.join(', ')}</p>
              <p className='text-[20px] text-gray-600 font-extralight'>{user.description}</p>
              <div className='flex gap-2 mt-2'>
                <button className='m-2 p-2 w-auto bg-green-200 text-green-500 rounded-3xl'>inPerson</button>
                <button className='m-2 p-2 w-32 bg-yellow-200 text-yellow-500 rounded-3xl'>Education</button>
                <button className='m-2 p-2 w-14 bg-blue-200 text-blue-500 rounded-3xl'>IT</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
