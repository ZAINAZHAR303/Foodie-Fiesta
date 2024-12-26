import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutUs() {
  const teamMembers = [
    {
      name: 'Zain',
      role: 'Frontend Developer',
      bio: 'I am a passionate frontend developer with expertise in React, Next.js, and modern UI/UX design principles. I love creating interactive and visually appealing user interfaces.',
      photo: 'zain.jpeg', // Replace with your actual photo path
      skills: ['React', 'Next.js', 'Firebase', 'GSAP', 'Tailwind CSS'],
    },
    {
      name: 'Sara Khalid',
      role: 'Web Designer', // Replace this role with the actual role
      bio: 'A highly skilled Web Designer who specializes in creating efficient and secure APIs. Always enthusiastic about solving complex problems.', // Replace with the actual bio
      photo: 'kissan1.jpg', // Replace with your teammate's photo path
      skills: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'], // Replace with actual skills
    },
  ];

  return (
    <>
    <Navbar />
    <section className="about-us-section py-12 px-4 m-4 neumorphic">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card  p-6 rounded-lg neumorphic text-center transition-transform hover:scale-105"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-inner-neumorphic"
              />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <h4 className="text-lg font-semibold text-gray-600 mb-4">{member.role}</h4>
              <p className="text-gray-700 mb-4">{member.bio}</p>
              <div className="skills">
                <h4 className="text-lg font-semibold mb-2">Skills & Technologies</h4>
                <ul className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-blue-200 text-blue-800 py-1 px-3 rounded-full text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="extra-content mt-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
          <p className="text-gray-700 mb-6">
            Our team is dedicated to delivering quality projects with cutting-edge technology and user-focused design. We believe in collaboration, innovation, and excellence.
          </p>
          <p className="text-gray-700">
            Together, we bring a blend of creativity and technical expertise to every project, ensuring it stands out and meets the needs of users.
          </p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default AboutUs;
