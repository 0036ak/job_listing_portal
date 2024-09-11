import React from 'react';

const JobCard = ({ title, company, rating, reviews, experience, salary, location, skills, daysAgo, logo }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-start max-w-4xl mx-auto my-6">

            <div className="flex flex-col space-y-2">
                
                <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <span className="text-sm text-gray-500">{company}</span>
                    <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">&#9733;</span>
                        <span className="text-sm text-gray-500">{rating}</span>
                        <span className="text-sm text-gray-400">({reviews} Reviews)</span>
                    </div>
                </div>


                <div className="flex space-x-4 text-gray-600 text-sm">
                    <div className="flex items-center">
                        <div className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><rect x="32" y="128" width="448" height="320" rx="48" ry="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" /><path d="M144 128V96a32 32 0 0132-32h160a32 32 0 0132 32v32M480 240H32M320 240v24a8 8 0 01-8 8H200a8 8 0 01-8-8v-24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>
                        </div>
                        <span>{experience} Yrs</span>
                    </div>

                    <div className="flex items-center">
                        <div className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><rect x="48" y="144" width="416" height="288" rx="48" ry="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" /><path d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" /><path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z" /></svg>
                        </div>
                        <span>₹ {salary} Lacs PA</span>
                    </div>

                    <div className="flex items-center">
                        <div className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>
                        </div>
                        <span>{location}</span>
                    </div>
                </div>


                <div className="text-gray-700 text-sm mt-2">
                    <p>Required Skills: <span className="font-semibold">Must have skills</span></p>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {skills.map((skill, index) => (
                            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">{skill}</span>
                        ))}
                    </div>
                </div>


                <p className="text-gray-400 text-xs mt-2">{daysAgo} Days Ago</p>
            </div>


            <div className="flex flex-col items-center space-y-4">
                <img
                    src={logo}
                    alt="Company Logo"
                    className="w-12 h-12 object-cover rounded-full"
                />
                
            </div>

        </div>
    );
};

export default JobCard;