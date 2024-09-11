import React from 'react';
import JobCard from './jobcard';

const App = () => {
  
  const jobs = [
    {
      title: 'Java Developer',
      company: 'XYZ company',
      rating: 4.0,
      reviews: 69,
      experience: 0,
      salary: '2.5-3.5',
      location: 'Noida',
      skills: ['Spring Boot', 'Backend Development', 'Java', 'Full Stack Application Development', 'JDBC'],
      daysAgo: 2,
      logo: 'https://via.placeholder.com/50'
    },
    {
      title: 'Frontend Developer',
      company: 'XYZ company',
      rating: 4.5,
      reviews: 102,
      experience: 1,
      salary: '4.0-6.0',
      location: 'Bangalore',
      skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
      daysAgo: 1,
      logo: 'https://via.placeholder.com/50'
    },
    {
      title: 'Backend Developer',
      company: 'XYZ company',
      rating: 4.5,
      reviews: 102,
      experience: 1,
      salary: '5.0-7.0',
      location: 'Delhi',
      skills: ['NodeJs', 'ExpressJs', 'JavaScript', 'Jquery', 'Python'],
      daysAgo: 1,
      logo: 'https://via.placeholder.com/50'
    },
    
  ];

  return (
    <div className="p-6">
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          title={job.title}
          company={job.company}
          rating={job.rating}
          reviews={job.reviews}
          experience={job.experience}
          salary={job.salary}
          location={job.location}
          skills={job.skills}
          daysAgo={job.daysAgo}
          logo={job.logo}
        />
      ))}
    </div>
  );
};

export default App;



